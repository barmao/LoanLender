const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  amount: {
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
    enum: ['active', 'repaid', 'defaulted','pending', 'approved', 'rejected', 'completed'],
    default: 'pending',
  },
  schedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Schedule',
    required: false
  },
});

module.exports = mongoose.model('Loan', loanSchema);
