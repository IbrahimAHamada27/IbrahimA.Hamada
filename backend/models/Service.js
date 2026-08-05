const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String } // e.g., fontawesome class or base64
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema);
