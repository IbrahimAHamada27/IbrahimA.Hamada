const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String },
  message: { type: String, required: true },
  image: { type: String } // Base64 or URL
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', TestimonialSchema);
