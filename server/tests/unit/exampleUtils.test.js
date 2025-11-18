// Example utility function tests - adapt these to your actual functions

// Example utility function (replace with your actual functions)
const formatDate = (date) => date.toISOString().split('T')[0];
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

describe('Utility Functions', () => {
  test('formatDate should return YYYY-MM-DD format', () => {
    const testDate = new Date('2023-12-25');
    expect(formatDate(testDate)).toBe('2023-12-25');
  });

  test('validateEmail should accept valid emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
  });
});
