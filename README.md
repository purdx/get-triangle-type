# get-triangle-type

Returns the type of triangle based on 3 lengths given as arguments

## Install
Install with npm
```sh
$ npm install get-triangle-type --save
```

## Usage
```js
var getTriangleType = require('get-triangle-type')

console.log(getTriangleType(10, 10, 10));
// => 'equilateral'

console.log(getTriangleType(10, 5, 8));
// => 'scalene'

console.log(getTriangleType(10, 3, 10));
// => 'isosceles'

console.log(getTriangleType('test', 3, 10));
// => Error: Arguments must be number, not word or letter
```

## Development
First you should clone this repository then install dev dependencies:
```sh
$ npm install -D
```
When you finished development run test:
```sh
$ npm test
```
