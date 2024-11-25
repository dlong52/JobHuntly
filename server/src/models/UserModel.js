const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: function () {
      return this.account_type === 'default'; // Required nếu account_type là 'default'
    }
  },
  role: {
    type: String,
    enum: ['candidate', 'employer'],
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  account_type: { 
    type: String,
    enum: ['google', 'default'],
    required: true
  },
  firebaseUid: {
    type: String,
    required: function () {
      return this.account_type === 'google'; // Required nếu account_type là 'google'
    },
    unique: true,
    sparse: true // Unique nhưng chỉ áp dụng với non-null values
  },
  profile: {
    name: {
      type: String
    },
    phone_number: {
      type: String
    },
    address: {
      province: { type: String },
      district: { type: String },
      ward: { type: String },
      specific_address: { type: String }
    },
    applied_jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
    chat_rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom' }],
    created_cvs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CV' }]
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Middleware để cập nhật 'updated_at' trước khi lưu tài liệu
userSchema.pre('save', function (next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model('User', userSchema);
