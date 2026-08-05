const express = require('express');
const router = express.Router();
const SiteInfo = require('../models/SiteInfo');

router.get('/', async (req, res) => {
  try {
    let siteInfo = await SiteInfo.findOne();
    if (!siteInfo) {
      siteInfo = new SiteInfo({});
    }
    res.json(siteInfo);
  } catch (error) {
    console.error('Error fetching site info:', error);
    res.json({
      heroTitle: 'Software Tester & Web Developer',
      heroDesc: 'Quality Assurance Specialist & Full-Stack Web Developer.',
      aboutTitle: 'Background & Expertise',
      aboutDesc1: 'Passionate about QA automation, software testing, and modern full-stack web applications.'
    });
  }
});

router.post('/', async (req, res) => {
  try {
    let siteInfo = await SiteInfo.findOne();
    if (!siteInfo) {
      siteInfo = new SiteInfo(req.body);
      await siteInfo.save();
    } else {
      siteInfo = await SiteInfo.findOneAndUpdate({}, req.body, { new: true, runValidators: true });
    }
    res.json(siteInfo);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update site info' });
  }
});


router.put('/', async (req, res) => {
  try {
    let siteInfo = await SiteInfo.findOne();
    if (!siteInfo) {
      siteInfo = new SiteInfo(req.body);
      await siteInfo.save();
    } else {
      siteInfo = await SiteInfo.findOneAndUpdate({}, req.body, { new: true, runValidators: true });
    }
    res.json(siteInfo);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update site info' });
  }
});

module.exports = router;
