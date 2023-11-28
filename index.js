// var http = require('http');
// http.createServer(function(req, res) {
//     res.write('Hello from HTTP module');
//     res.end();
// }).listen('8080');

// var cl = require('cli-color');
// console.log(cl.red.underline('hello world'));

const person = require('./person')
console.log(person.name);