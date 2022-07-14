// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split(' ');

console.log(input);
const N = parseInt(input[0]);
const M = parseInt(input[1]);
console.log(typeof N);
if(M <= N) {
    if(M == 1 || M == 2) {
        console.log('NEWBIE!');
    } else {
        console.log('OLDBIE!');
    }
} else {
    console.log('TLE!');
}