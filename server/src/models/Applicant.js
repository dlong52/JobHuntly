const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  job_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  submitted_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);
