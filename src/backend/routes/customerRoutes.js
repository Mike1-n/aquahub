const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Other routes...

router.put('/customers/status/:id', customerController.changeCustomerStatus);

module.exports = router;
