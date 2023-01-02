const validateInput = (req, res, next) => {
    const { amount, interest, duration } = req.body;
    if (isNaN(amount) || isNaN(interest) || isNaN(duration)) {
        res.status(400).send('Invalid input');
    } else {
        next();
    }
};

module.exports = validateInput;