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


// proacademy lesson : 4
//*************************************** */
// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })
// rl.question('please enter your name : ', (name) => {
//     console.log('you are ' + name);
//     rl.close()
// })
// rl.on ('close', () => {
//     console.log('Interface is closed');
//     process.exit(0);
// })

// const readline2 = require('readline');
// const rl2 = readline2.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })
// rl2.question('How old are you ? ', (age) => {
//     console.log('your age is ' + age)
//     rl2.close();
// })
// rl2.on('close', () => {
//     console.log('exit')
//     process.exit(0);
// })


// Lesson 5

const fs = require('fs');
const textIn = fs.readFileSync('./files/input.txt', 'utf-8');
console.log(textIn)

const content = `data read from input.txt : ${textIn} \ndate created ${new Date()}`
fs.writeFileSync('./files/output.txt', content);
