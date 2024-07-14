const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { userId, items, totalPrice } = req.body;
  try {
    const order = new Order({ user: userId, items, totalPrice });
    await order.save();
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

exports.getOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId).populate('items').populate('user');
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error });
  }
};
