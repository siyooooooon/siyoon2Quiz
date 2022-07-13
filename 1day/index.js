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
let toHour = 0;
let toMinute = 0;
let toSecond = 0;
if(cookTime >= 3600) {
    toHour = parseInt(cookTime / 3600);
    toMinute = parseInt(cookTime % 3600);
    console.log('tohour',toHour);
    console.log('toMinute',toMinute);
}
let resultMinute = parseInt(toMinute / 60);
console.log('resultMinute',resultMinute);




console.log(H,M,S);
console.log(typeof H);