const subtract = require('./subtract')

test('properly subtract two numbers', () => {
  expect(subtract(4, 1)).toBe(3)
})
