const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: String, required: true },
  link: { type: String },
  imageUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Certificate', CertificateSchema);
