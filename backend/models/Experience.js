const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  years: { type: String, required: true },
  desc: { type: String, required: true },
  imageUrl: { type: String },
  link: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Experience', ExperienceSchema);
