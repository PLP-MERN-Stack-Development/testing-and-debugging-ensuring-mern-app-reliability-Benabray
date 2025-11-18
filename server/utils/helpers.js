// Utility functions for testing
const formatName = (firstName, lastName) => {
  // Trim each part and then combine with single space
  const trimmedFirst = firstName.trim();
  const trimmedLast = lastName.trim();
  return `${trimmedFirst} ${trimmedLast}`.trim();
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const validateUser = (user) => {
  if (!user.email || !user.email.includes('@')) {
    return { isValid: false, error: 'Invalid email' };
  }
  if (!user.password || user.password.length < 6) {
    return { isValid: false, error: 'Password must be at least 6 characters' };
  }
  return { isValid: true, error: null };
};

module.exports = {
  formatName,
  calculateTotal,
  validateUser
};
