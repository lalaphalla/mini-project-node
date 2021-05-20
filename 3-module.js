//CommonJS, every file is module(by default)
//Modules - Encapsulated code (only share minimum)
const names = require('./4-name.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative')
console.log(data);

sayHi(names.jay)
sayHi(names.phalla)
sayHi('Game')

require('./7-mind-grenade')