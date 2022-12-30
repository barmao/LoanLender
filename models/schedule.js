const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
    loan: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Loan', 
        required: true
    },
    paymentNumber: {
        type: Number, 
        required: true
    },
    paymentAmount: {
        type: Number, 
        required: true
    },
    dueDate: {
        type: Date, 
        required: true
    },
    paid: {
        type: Boolean, 
        default: false
    }
});

module.exports = mongoose.model("Schedule", ScheduleSchema);

