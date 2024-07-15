const Payment = require('../models/paymentModel');

// Create a new payment
exports.createPayment = async (req, res) => {
  try {
    const { order_id, amount, payment_method } = req.body;

    const payment = new Payment({
      order_id,
      amount,
      payment_method,
      status: 'Pending', // or any initial status you prefer
    });

    await payment.save();

    res.status(201).json({
      success: true,
      message: 'Payment created successfully',
      data: payment,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: err.message,
    });
  }
};

// Get all payments (admin only)
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({
      success: true,
      data: payments,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: err.message,
    });
  }
};

// Get a single payment by ID
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found',
      });
    }

    res.status(200).json({
      success: true,
      data: payment,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: err.message,
    });
  }
};

// Update a payment (admin only)
exports.updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Payment updated successfully',
      data: payment,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: err.message,
    });
  }
};

// Delete a payment (admin only)
exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Payment deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: err.message,
    });
  }
};
