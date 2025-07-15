const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  amount: Number,
  description: String,
  orderId: String,
  paymentId: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Payment', PaymentSchema);
