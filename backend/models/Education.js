const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  institution: { type: String, required: true },
  date: { type: String, required: true },
  desc: { type: String },
  type: { type: String, enum: ['university', 'course'], required: true },
  link: { type: String },
  imageUrl: { type: String },
  skillsLearned: { type: [String] }
}, { timestamps: true });

module.exports = mongoose.model('Education', EducationSchema);
