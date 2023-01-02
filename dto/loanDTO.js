class loanDTO {
    amount;
    interestRate;
    term;
    startDate;
    endDate;
    borrower;
    lender;
    reminderFrequency;
    status;
    schedule;

    constructor(data) {
        this.amount = data.amount;
        this.interestRate = data.interestRate;
        this.term = data.term;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.borrower = data.borrower;
        this.lender = data.lender;
        this.reminderFrequency = data.reminderFrequency;
        this.status = data.status;
        this.schedule = data.schedule;
    }
}



module.exports = loanDTO;