const mongoose = require('mongoose');

const SiteInfoSchema = new mongoose.Schema({
  brandName: { type: String },
  heroTitle: { type: String },
  heroDesc: { type: String },
  aboutTitle: { type: String },
  aboutDesc1: { type: String },
  aboutDesc2: { type: String },
  academicTitle: { type: String },
  academicDesc: { type: String },
  philosophyTitle: { type: String },
  philosophyDesc: { type: String },
  githubUrl: { type: String },
  linkedinUrl: { type: String },
  socialLinks: [{
    name: { type: String, required: true },
    url: { type: String, required: true },
    icon: { type: String }
  }],
  profileImage: { type: String },
  logoImage: { type: String },
  brandDesc: { type: String },
  contactTitle: { type: String },
  contactSubtitle: { type: String },
  contactEmail: { type: String },
  emailProvider: { type: String },
  emailjsServiceId: { type: String },
  emailjsTemplateId: { type: String },
  emailjsPublicKey: { type: String },
  formspreeUrl: { type: String },
  web3formsAccessKey: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('SiteInfo', SiteInfoSchema);
