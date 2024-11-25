const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  sender_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  job_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }, // Optional reference
  message: { type: String, required: true },
  sent_at: { type: Date, default: Date.now },
  read_at: Date
});

module.exports = mongoose.model('Message', MessageSchema);
