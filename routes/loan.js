var express = require('express');
var router = express.Router();
const auth = require("../middlewares/auth");
const validateInput = require("../middlewares/validateInput");
const loanService = require('../services/LoanService');

/*  
Invoke service when doing a business logic - does fetching from data sources etc..
*/

/*  This endpoint would be used to apply for a loan. */
router.post('/', auth, (reauth, q, res, next) => {
  res.send('respond with a resource');
  res.status(200);
});

/*  This endpoint would be used to retrieve a list of loans that have been applied for. */
router.get('/', auth, (req, res, next) => {
  res.send('respond with a resource');
  res.status(200);
});

/*  This endpoint would be used to retrieve the details of a specific loan. */
router.get('/:id', auth, (req, res, next) => {
  res.send('respond with a resource');
  res.status(200);
});

/*  This endpoint would be used to update the status of a loan. */
router.put('/:id', auth, (req, res, next) => {
  res.send('respond with a resource');
  res.status(200);
});

//Apply

/*  If the application is accepted, it saves the loan application to a database and returns a JSON object containing the loan details. */
router.post('/apply', auth, async (req, res, next) => {

  console.log(req);

  const loan = await loanService.createLoan(req);

  res.send(JSON.stringify(loan));
  res.status(200);
});

//Prepay

/*  Accepts a loan ID as a URL parameter and a JSON object containing the amount being prepaid. */
router.post('/:id/prepay', auth, (req, res, next) => {
  res.send('respond with a resource');
  res.status(200);
});

//Schedule

/* Accepts a loan ID as a URL parameter and returns a JSON object containing the loan's payment schedule. */
router.get('/:id/schedule', auth, (req, res, next) => {
  res.send('respond with a resource');
  res.status(200);
});

//Reminders

/*   Accepts a loan ID as a URL parameter and a JSON object containing the borrower's contact information and the desired frequency of payment reminders. */
router.post('/:id/reminders', auth, (req, res, next) => {
  res.send('respond with a resource');
  res.status(200);
});

/* It updates the information in the database and adjusts the automatic reminders accordingly. */
router.put('/:id/reminders', auth, (req, res, next) => {
  res.send('respond with a resource');
  res.status(200);
});

/*  Accepts a loan ID as a URL parameter and returns a JSON object containing the current information for the payment reminders. */
router.get('/:id/reminders', auth, (req, res, next) => {
  res.send('respond with a resource');
  res.status(200);
});

//Documents

/*  This endpoint would be used to upload supporting documents for a loan application. */
router.post('/:id/documents', auth, (req, res, next) => {
  res.send('respond with a resource');
  res.status(200);
});



module.exports = router;