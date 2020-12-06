const isBlank = require('./isBlank');

test('returns true for empty string', () => {
  expect(isBlank('')).toBe(true);
});

test('returns true for blank string', () => {
  expect(isBlank('    ')).toBe(true);
});

test('returns true for multiline blank string', () => {
  expect(isBlank("    \n ")).toBe(true);
});

test('returns true for null', () => {
  expect(isBlank(null)).toBe(true);
});

test('returns true for undefined', () => {
  expect(isBlank(undefined)).toBe(true);
});

test('returns false for non blank string', () => {
  expect(isBlank('null')).toBe(false);
});

test('returns false for strings with zero-width characters', () => {
  expect(isBlank('\u200C\uFEFF')).toBe(false);
});

test('returns false for string with emoji', () => {
  expect(isBlank('🍍')).toBe(false);
});

