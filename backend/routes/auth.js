const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const getJwtSecret = () => process.env.JWT_SECRET || 'fallback_secret_key_2026';

// Seed initial admin user if not exists
async function ensureAdminUser() {
  const adminEmail = (process.env.ADMIN_EMAIL || 'ibrahima.hamada277@gmail.com').toLowerCase().trim();
  const adminPassword = process.env.ADMIN_PASSWORD || 'Hamada@2006#';

  try {
    let admin = await User.findOne({ email: adminEmail });
    if (!admin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      admin = new User({ email: adminEmail, password: hashedPassword, role: 'admin' });
      await admin.save();
      console.log(`[AUTH] Admin user (${adminEmail}) initialized successfully.`);
    }
  } catch (err) {
    console.error('[AUTH] Failed to initialize admin user:', err.message);
  }
}

// Call seed check on route load
ensureAdminUser();

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const inputEmail = email.toLowerCase().trim();
    const envAdminEmail = (process.env.ADMIN_EMAIL || 'ibrahima.hamada277@gmail.com').toLowerCase().trim();
    const envAdminPass = process.env.ADMIN_PASSWORD || 'Hamada@2006#';

    let isMatch = false;
    let userId = 'admin_env';

    // 1. Try DB lookup
    const user = await User.findOne({ email: inputEmail });
    if (user) {
      isMatch = await bcrypt.compare(password, user.password);
      userId = user._id;
    } else if (inputEmail === envAdminEmail) {
      // 2. Try process.env fallback
      isMatch = (password === envAdminPass);
    }

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Generate JWT token (expires in 7 days)
    const token = jwt.sign(
      { userId, email: inputEmail, role: 'admin' },
      getJwtSecret(),
      { expiresIn: '7d' }
    );

    return res.json({
      message: 'Login successful',
      token,
      user: { email: inputEmail, role: 'admin' }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/auth/verify
router.get('/verify', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ valid: false, error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, getJwtSecret());
    return res.json({ valid: true, user: decoded });
  } catch (err) {
    return res.status(401).json({ valid: false, error: 'Token expired or invalid' });
  }
});

module.exports = router;
