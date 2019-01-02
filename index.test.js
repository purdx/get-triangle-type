const getTriangleType = require('./index.js')

test('Three equal length to equal equilateral', () => {
  expect(getTriangleType(10, 10, 10)).toBe('equilateral')
})
test('Two equal length to equal isosceles', () => {
  expect(getTriangleType(10, 3, 10)).toBe('isosceles')
})
test('Three different length to equal scalene', () => {
  expect(getTriangleType(10, 5, 8)).toBe('scalene')
})
