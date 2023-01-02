const loanDTO = require("../dto/loanDTO");
const loan = require("../models/loan");

module.exports = {
    calculatePayment: (amount, interest, duration) => {
        // calculate loan payment
        return amount * interest / (1 - Math.pow(1 + interest, -duration));
    },
    createPaymentSchedule: (amount, duration) => {
        // creates payment schedule using duration in months
        const schedule = [];

        return schedule;
    },
    createLoan: async (req) => {

        try {
            // creates payment schedule using duration in months
            
            const { amount, interest, duration } = req.body;
            const { user_id } = req.user;

            // const payment = calculatePayment(amount, interest, duration);
            // const schedule = createPaymentSchedule(amount, duration);
            // const creditworthy = checkCreditworthiness(user_id);

            // if (creditworthy) {
            //     // create loan record in database and send response
            //     res.send('respond with a resource');
            //     res.status(200);
            //   } else {
            //     res.status(400).send('Loan application denied');
            //   }

             var newLoan = new loanDTO({
                amount: amount,
                term: duration,
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
                interestRate: interest,
                borrower: user_id,
                lender: user_id,
                reminderFrequency: "monthly",
                status: "pending",
            });

            //Save to database and return loan object
            const salaryRecord = await loan.create(newLoan);


            //Send to Q
            

            return salaryRecord;

        } catch (err) {
            const newLoan = new loan({});
            return newLoan;
        }
    },
    checkCreditworthiness: (userId) => {
        // check user's credit score and financial history
        console.log(userId);
        return true;
    }
}