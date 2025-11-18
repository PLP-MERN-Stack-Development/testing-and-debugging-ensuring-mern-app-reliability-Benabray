const { authenticateToken, requireAdmin } = require('../../middleware/auth');

// Mock response object
const createResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Authentication Middleware', () => {
  describe('authenticateToken', () => {
    test('should allow access with valid token', () => {
      const req = { header: jest.fn().mockReturnValue('Bearer valid-token') };
      const res = createResponse();
      const next = jest.fn();

      authenticateToken(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(req.user).toEqual({ id: 1, name: 'Test User' });
    });

    test('should deny access without token', () => {
      const req = { header: jest.fn().mockReturnValue(null) };
      const res = createResponse();
      const next = jest.fn();

      authenticateToken(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ error: 'Access denied. No token provided.' });
    });

    test('should deny access with invalid token', () => {
      const req = { header: jest.fn().mockReturnValue('Bearer invalid-token') };
      const res = createResponse();
      const next = jest.fn();

      authenticateToken(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid token.' });
    });
  });
});
