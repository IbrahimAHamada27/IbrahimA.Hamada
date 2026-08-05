const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String }, // For the tools/stack details
  iconUrl: { type: String },
  createdAt: { type: Date }
});

module.exports = mongoose.model('Skill', skillSchema);
