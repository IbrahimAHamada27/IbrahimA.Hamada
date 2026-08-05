const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Connect to MongoDB
const MONGODB_URI = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio_db';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully'))
  .catch((err) => console.error('❌ Error connecting to MongoDB:', err));

// Middlewares
const authMiddleware = require('./middlewares/authMiddleware');

// Routes
const authRoutes = require('./routes/auth');
const siteInfoRoutes = require('./routes/siteInfo');
const projectsRoutes = require('./routes/projects');
const certificatesRoutes = require('./routes/certificates');
const experienceRoutes = require('./routes/experience');
const messagesRoutes = require('./routes/messages');
const skillsRoutes = require('./routes/skills');
const testimonialsRoutes = require('./routes/testimonials');
const educationRoutes = require('./routes/education');
const servicesRoutes = require('./routes/services');
const activitiesRoutes = require('./routes/activities');

// Public Auth Route
app.use('/api/auth', authRoutes);

// Apply Security Middleware to protecting endpoints
app.use('/api/siteinfo', authMiddleware, siteInfoRoutes);
app.use('/api/projects', authMiddleware, projectsRoutes);
app.use('/api/certificates', authMiddleware, certificatesRoutes);
app.use('/api/experience', authMiddleware, experienceRoutes);
app.use('/api/messages', authMiddleware, messagesRoutes);
app.use('/api/skills', authMiddleware, skillsRoutes);
app.use('/api/testimonials', authMiddleware, testimonialsRoutes);
app.use('/api/education', authMiddleware, educationRoutes);
app.use('/api/services', authMiddleware, servicesRoutes);
app.use('/api/activities', authMiddleware, activitiesRoutes);

// Root Health Check Route
app.get('/api', (req, res) => {
  res.json({ status: 'online', message: 'Ibrahim A. Hamada Portfolio API is running' });
});

// Start Server locally if not running as serverless function
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
