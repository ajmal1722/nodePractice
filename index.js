const fs = require('fs');
var http = require('http');

const html = fs.readFileSync(`./Template/index.html`, 'utf-8');

http.createServer(function(req, res) {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');

    // Write HTML content
    res.write(html);

    // End the response
    res.end();
}).listen(8080);



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
/****************************** */
// const fs = require('fs');
// const textIn = fs.readFileSync('./files/input.txt', 'utf-8');
// console.log(textIn)

// const content = `data read from input.txt : ${textIn} \ndate created ${new Date()}`
// fs.writeFileSync('./files/output.txt', content);

// readfile from Lesson 7
/******************************* */

// const fs = require('fs')
// fs.readFile('./files/start.txt', 'utf-8', (error, data) => {
//     console.log(data)
//     fs.readFile(`./files/${data}.txt`, `utf-8`, (error2, data2) => {
//         console.log(data2)
//         fs.writeFile('./files/output.txt', `${data2}\n\n${new Date()}`,(error3, data3) => {
//             console.log('file written succesfully');
//         })
//     })
// })
