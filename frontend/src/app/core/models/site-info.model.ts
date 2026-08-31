
export interface SiteInfo {
  _id?: string;
  brandName?: string;
  heroTitle?: string;
  heroDesc?: string;
  aboutTitle?: string;
  aboutDesc1?: string;
  aboutDesc2?: string;
  academicTitle?: string;
  academicDesc?: string;
  philosophyTitle?: string;
  philosophyDesc?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  telegramUrl?: string;
  whatsappUrl?: string;
  socialLinks?: { name: string; url: string; icon?: string }[];
  profileImage?: string;
  logoImage?: string;
  brandDesc?: string;
  contactTitle?: string;
  contactSubtitle?: string;
  contactEmail?: string;
  phone?: string;
  emailProvider?: string;
  emailjsServiceId?: string;
  emailjsTemplateId?: string;
  emailjsPublicKey?: string;
  formspreeUrl?: string;
  web3formsAccessKey?: string;
  createdAt?: string;
  updatedAt?: string;
}
