module.exports = function getTriangleType (a, b, c){
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    throw 'Arguments should be number not words or letters'
  } else {
    if (a == b && b == c) {
      return 'equilateral'
    } else if (a == b || b == c || a == c) {
      return 'isosceles'
    } else {
      return 'scalene'
    }
  }
}
