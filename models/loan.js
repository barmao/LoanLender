const mongoose = require('mongoose');

const repaymentScheduleSchema = new mongoose.Schema({
  paymentNumber: {
    type: Number,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  amountDue: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'overdue'],
    required: true
  }
});

const loanSchema = new mongoose.Schema({
  loanAmount: {
    type: Number,
    required: true
  },
  interestRate: {
    type: Number,
    required: true
  },
  term: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reminderFrequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly'],
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'repaid', 'defaulted'],
    required: true
  },
  repaymentSchedule: [repaymentScheduleSchema]
});

module.exports = mongoose.model('Loan', loanSchema);
