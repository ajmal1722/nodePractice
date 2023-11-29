// var http = require('http');
// http.createServer(function(req, res) {
//     res.write('Hello from HTTP module');
//     res.end();
// }).listen('8080');

// var cl = require('cli-color');
// console.log(cl.red.underline('hello world'));

// const person = require('./person')
// console.log(person.name);

// var message = ''
// console.log(global.message);

// console.log('Hello World')
// console.log('Hello ')
// console.log('     World')

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
rl.question('please enter your name : ', (name) => {
    console.log('you are ' + name);
    rl.close()
})
rl.on ('close', () => {
    console.log('Interface is closed');
    process.exit(0);
})