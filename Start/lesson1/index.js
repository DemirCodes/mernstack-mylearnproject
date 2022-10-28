const fs = require('fs');

const textIn = fs.readFileSync('a.txt', 'utf-8');
console.log(textIn);
const textOut = ` lorem lorem  lorem  lorem lorem  lorem  lorem  : ${textIn}.\n Created on ${Date.now()}`;
fs.writeFileSync('a.txt' , textOut);
console.log('File written !');

fs.readFile('a.txt','utf-8', (err , data) => {

    console.log(data);

});

console.log('Will read File !');