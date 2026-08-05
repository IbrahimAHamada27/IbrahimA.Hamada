const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const upload = require('../middlewares/upload');

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a skill
router.post('/', upload.single('icon'), async (req, res) => {
  try {
    const { name, description, iconUrl } = req.body;
    let finalIconUrl = iconUrl || '';
    if (req.file) {
      finalIconUrl = `/uploads/${req.file.filename}`;
    }
    const skill = new Skill({ name, description, iconUrl: finalIconUrl });
    await skill.save();
    res.status(201).json({ message: 'Skill added successfully', skill });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a skill
router.put('/:id', upload.single('icon'), async (req, res) => {
  try {
    const { name, description, iconUrl } = req.body;
    let updateData = { name, description };
    
    // Use the uploaded file or the provided iconUrl text
    if (req.file) {
      updateData.iconUrl = `/uploads/${req.file.filename}`;
    } else if (iconUrl !== undefined) {
      updateData.iconUrl = iconUrl;
    }

    const skill = await Skill.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json({ message: 'Skill updated successfully', skill });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a skill
router.delete('/:id', async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: 'Skill deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
