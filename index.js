const myInformation = require('./information');

const {say} = require('cowsay');
const message = say({text : 'myInformation'});

console.log(message);