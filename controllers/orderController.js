const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { menuId, quantity } = req.body;
  try {
    const order = new Order({ menuId, quantity });
    await order.save();
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const { menuId, quantity } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(id, { menuId, quantity }, { new: true });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error });
  }
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await Order.findByIdAndDelete(id);
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting order', error });
  }
};
