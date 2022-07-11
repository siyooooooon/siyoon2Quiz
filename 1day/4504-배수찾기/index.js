// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);

const numN = input[0];
input.shift();


for(let i = 0; i < input.length; i++) {

    if(parseInt(input[i]) === 0) {
        break;
    } else if(parseInt(input[i] % numN) === 0) {
        console.log(input[i] + ' is a multiple of ' + numN + '.');
    } else {
        console.log(input[i] + ' is NOT a multiple of ' + numN + '.');
    }
}