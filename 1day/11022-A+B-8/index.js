// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);

const testCase = parseInt(input[0]);
input.shift();

for(let i = 0; i < testCase; i++) {
    let number = input[i].split(' ');
    console.log('number',number);
    console.log(`Case #${i + 1}: ${number[0]} + ${number[1]} = ${parseInt(number[0])+parseInt(number[1])}`);
}