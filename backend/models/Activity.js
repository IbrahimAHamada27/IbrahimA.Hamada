const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: { type: String, required: true },
  role: { type: String },
  date: { type: String, required: true },
  desc: { type: String },
  link: { type: String },
  imageUrl: { type: String },
  category: { type: String, enum: ['volunteering', 'event', 'activity'], default: 'volunteering' }
}, { timestamps: true });

module.exports = mongoose.model('Activity', ActivitySchema);
