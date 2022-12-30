const ReminderSchema = new mongoose.Schema({
    loan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loan',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    sendDate: {
        type: Date,
        required: true
    },
    sent: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('Reminder', ReminderSchema);

