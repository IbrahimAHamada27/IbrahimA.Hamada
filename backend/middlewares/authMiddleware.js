const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Allow all GET requests for public portfolio content
  if (req.method === 'GET') {
    return next();
  }

  // Allow posting contact messages without authentication token
  if (req.method === 'POST' && (req.baseUrl.endsWith('/messages') || req.path.includes('messages'))) {
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access denied. No authentication token provided.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const jwtSecret = process.env.JWT_SECRET || 'fallback_secret_key_2026';
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
};

