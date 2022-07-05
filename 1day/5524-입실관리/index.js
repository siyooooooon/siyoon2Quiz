// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);

const testCase = input[0];

for(let i = 1; i <= testCase; i++ ) {
    console.log(input[i].toLowerCase());
}








