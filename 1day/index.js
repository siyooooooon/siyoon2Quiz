// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);
const currentTime = input[0].split(' ');
const cookTime = parseInt(input[1]);
//let hour = parseInt(currentTime[0]);
let [H, M, S] = currentTime;



console.log(currentTime);
console.log(cookTime);
console.log('hms',H,M,S);
console.log('resultMinute',resultMinute);
console.log('takeHour',takeHour);
console.log('resultHour',resultHour);