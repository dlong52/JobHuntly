const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  experience: { type: String, required: true},
  description: { type: String, required: true },
  requirements: [String],
  salary: {
    min: Number,
    max: Number
  },
  location: String,
  employment_type: { type: String, enum: ['full-time', 'part-time', 'internship'] },
  posted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }], // Tham chiếu đến Category
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);
