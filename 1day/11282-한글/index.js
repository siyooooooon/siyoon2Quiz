// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = fs.readFileSync('./1day/test.txt').toString().trim();

console.log(input);

const answer = String.fromCharCode(Number(input) + 44031)
// const answer = String.fromCharCode(Number(input))
// const answer = input[0].charCodeAt() - 44031;

console.log(answer);