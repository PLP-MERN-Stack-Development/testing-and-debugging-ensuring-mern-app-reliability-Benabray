// Sample middleware for testing
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }
  
  // Simulate token verification
  if (token === 'valid-token') {
    req.user = { id: 1, name: 'Test User' };
    next();
  } else {
    return res.status(401).json({ error: 'Invalid token.' });
  }
};

const requireAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ error: 'Admin access required.' });
  }
};

module.exports = {
  authenticateToken,
  requireAdmin
};
