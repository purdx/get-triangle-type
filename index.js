module.exports = function getTriangleType (a, b, c){
  if (a === b && b === c) {
    return 'equilateral'
  } else if (a === b || b === c || a === c) {
    return 'isosceles'
  } else {
    return 'scalene'
  }
}
