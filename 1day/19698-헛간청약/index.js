// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split(' ');

console.log(input);
const N = parseInt(input[0]);
const W = parseInt(input[1]);
const H = parseInt(input[2]);
const L = parseInt(input[3]);

let cowHouse = parseInt(W / L) * parseInt(H / L);
if(cowHouse >= N) {
    console.log(N);
} else {
    console.log(cowHouse);
}