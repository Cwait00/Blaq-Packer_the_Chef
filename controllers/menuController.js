const MenuItem = require('../models/MenuItem');

exports.createMenuItem = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  try {
    const menuItem = new MenuItem({ name, description, price, imageUrl });
    await menuItem.save();
    res.status(201).json({ message: 'Menu item created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating menu item', error });
  }
};

exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu items', error });
  }
};

exports.updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, imageUrl } = req.body;
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(id, { name, description, price, imageUrl }, { new: true });
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ message: 'Error updating menu item', error });
  }
};

exports.deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  try {
    await MenuItem.findByIdAndDelete(id);
    res.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting menu item', error });
  }
};
