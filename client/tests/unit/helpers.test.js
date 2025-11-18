import { formatCurrency, truncateText, debounce } from '../../src/utils/helpers';

describe('Client Utility Functions', () => {
  describe('formatCurrency', () => {
    test('should format number as USD currency', () => {
      expect(formatCurrency(25.5)).toBe('$25.50');
    });

    test('should handle zero', () => {
      expect(formatCurrency(0)).toBe('$0.00');
    });
  });

  describe('truncateText', () => {
    test('should truncate long text', () => {
      const longText = 'This is a very long text that needs truncating';
      expect(truncateText(longText, 20)).toBe('This is a very long ...');
    });

    test('should not truncate short text', () => {
      const shortText = 'Short text';
      expect(truncateText(shortText, 20)).toBe('Short text');
    });
  });

  describe('debounce', () => {
    jest.useFakeTimers();

    test('should delay function execution', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 1000);

      debouncedFn('test');
      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(1000);
      expect(mockFn).toHaveBeenCalledWith('test');
    });
  });
});
