const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();
const Payment = require('../models/Payment'); // Mongoose model

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
router.post('/create-order', async (req, res) => {
  const { amount, name, email, phone, description } = req.body;
  try {
    const options = {
      amount: amount * 100, // in paise
      currency: 'INR',
      receipt: `rcpt_${Date.now()}`,
      payment_capture: 1,
    };
    const order = await razorpay.orders.create(options);

    // Save initial payment info
    await Payment.create({
      name,
      email,
      phone,
      amount,
      description,
      orderId: order.id,
      status: 'created',
    });

    res.json({ orderId: order.id, key: process.env.RAZORPAY_KEY_ID });
  } catch (err) {
    res.status(500).json({ error: 'Order creation failed' });
  }
});

// Webhook for payment status
router.post('/webhook', express.json(), async (req, res) => {
  const { payload } = req.body;
  // Validate webhook signature here (recommended)
  if (payload && payload.payment && payload.payment.entity) {
    const payment = payload.payment.entity;
    await Payment.findOneAndUpdate(
      { orderId: payment.order_id },
      { status: payment.status, paymentId: payment.id }
    );
  }
  res.status(200).json({ status: 'ok' });
});

module.exports = router;
