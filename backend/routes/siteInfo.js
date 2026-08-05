const express = require('express');
const router = express.Router();
const SiteInfo = require('../models/SiteInfo');

router.get('/', async (req, res) => {
  try {
    let siteInfo = await SiteInfo.findOne();
    if (!siteInfo) {
      // Create default if it doesn't exist
      siteInfo = new SiteInfo({});
      await siteInfo.save();
    }
    res.json(siteInfo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch site info' });
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
