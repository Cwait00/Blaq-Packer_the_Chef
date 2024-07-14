const express = require('express');
const { createOrder, getOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/orders', createOrder);
router.get('/orders/:orderId', getOrder);

module.exports = router;
