const {people, ages} = require('./people.js');
const os = require('os');

console.log(people, ages);
console.log(os.platform(), os.homedir());