const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Payment processing endpoint
app.post('/api/payment', async (req, res) => {
  const { amount, paymentMethodId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });
    res.json({ success: true, paymentIntent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
