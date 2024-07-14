const express = require('express');
const { createMenuItem, getMenuItems } = require('../controllers/menuController');
const router = express.Router();

router.post('/menu-items', createMenuItem);
router.get('/menu-items', getMenuItems);

module.exports = router;
