// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');

const numA = parseInt(input[0]);
const numB = parseInt(input[1]);

if(numA > numB) {
    console.log('>');
} else if(numA < numB) {
    console.log('<');
} else if(numA === numB) {
    console.log('==');
}