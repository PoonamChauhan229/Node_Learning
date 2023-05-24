var validator = require('validator');
// isEmail
console.log(validator.isEmail("poonam.chauhan229@gmail.com"))
// true

console.log(validator.isEmail("poonam.chauhan229gmail.com"))
// false @ missing

// isURL
console.log(validator.isURL("hjhjhj"))
// false not an URL
