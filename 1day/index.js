// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('/n');

let testCase = input[0];
let numbers = [];
for (let i = 0; i <= testCase; i++) {
    numbers = input[i].split(' ');
    console.log(testCase);
    console.log('numbers', numbers);
    console.log(Number(numbers[0]) + Number(numbers[1]));
}

console.log();