const Convert = require('./Convert');

test('test cel to far', () => {
  const transform = new Convert();
  expect(transform.fromCelcius('far', 100)).toBe(212);
});
