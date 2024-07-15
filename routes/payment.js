const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// POST /api/payment - Create a new payment
router.post('/', paymentController.createPayment);

// GET /api/payment - Get all payments (admin only)
router.get('/', paymentController.getPayments);

// GET /api/payment/:id - Get a single payment by ID
router.get('/:id', paymentController.getPaymentById);

// PUT /api/payment/:id - Update a payment (admin only)
router.put('/:id', paymentController.updatePayment);

// DELETE /api/payment/:id - Delete a payment (admin only)
router.delete('/:id', paymentController.deletePayment);

module.exports = router;
