const { formatName, calculateTotal, validateUser } = require('../../utils/helpers');

describe('Server Utility Functions', () => {
  describe('formatName', () => {
    test('should combine first and last name', () => {
      expect(formatName('John', 'Doe')).toBe('John Doe');
    });

    test('should handle empty last name', () => {
      expect(formatName('John', '')).toBe('John');
    });

    test('should trim extra spaces', () => {
      expect(formatName('  John  ', '  Doe  ')).toBe('John Doe');
    });
  });

  describe('calculateTotal', () => {
    test('should calculate total for items', () => {
      const items = [
        { price: 10, quantity: 2 },
        { price: 5, quantity: 3 }
      ];
      expect(calculateTotal(items)).toBe(35); // 10*2 + 5*3 = 35
    });

    test('should return 0 for empty array', () => {
      expect(calculateTotal([])).toBe(0);
    });
  });

  describe('validateUser', () => {
    test('should validate correct user data', () => {
      const user = { email: 'test@example.com', password: 'password123' };
      expect(validateUser(user)).toEqual({ isValid: true, error: null });
    });

    test('should reject invalid email', () => {
      const user = { email: 'invalid-email', password: 'password123' };
      expect(validateUser(user)).toEqual({ isValid: false, error: 'Invalid email' });
    });

    test('should reject short password', () => {
      const user = { email: 'test@example.com', password: '123' };
      expect(validateUser(user)).toEqual({ isValid: false, error: 'Password must be at least 6 characters' });
    });
  });
});
