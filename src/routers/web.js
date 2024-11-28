const express = require('express');
const router = express.Router();
const { getHomePage, getAge, getMyLove, postNewUser, getCreatePage } = require('../controllers/homeController')
router.get('/', getHomePage)
router.get('/age', getAge)

router.get('/love', getMyLove)

router.get('/create', getCreatePage)
router.post('/create-user', postNewUser)

router.post('/orders', async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json({ success: true, data: order });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.get('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ success: false, error: 'Order not found' });
        }
        res.json({ success: true, data: order });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.put('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!order) {
            return res.status(404).json({ success: false, error: 'Order not found' });
        }
        res.json({ success: true, data: order });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

router.delete('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({ success: false, error: 'Order not found' });
        }
        res.json({ success: true, data: order });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router