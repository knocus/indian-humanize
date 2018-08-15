import {humanize} from '../humanize';

test('Humanized value of  12345 is 12.3K', () => {
  expect(humanize(12345)).toBe("12.3K");
});

test('Humanized value of  123 is 123', () => {
  expect(humanize(123)).toBe("123");
});

test('Humanized value of  123000 is 1.2L', () => {
  expect(humanize(123000)).toBe("1.2L");
});

test('Humanized value of  15000 is 15K', () => {
  expect(humanize(15000)).toBe("15K");
});
