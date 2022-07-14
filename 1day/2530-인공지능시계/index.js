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
let toMinute = parseInt(cookTime / 60);
let resultSecond = parseInt(cookTime % 60) + parseInt(S);
if(resultSecond >= 60) {
    toMinute = parseInt(resultSecond / 60);
    resultSecond -= 60;
}

console.log('toMinute',toMinute, parseInt(cookTime / 60), );
let resultMinute = parseInt(M) + parseInt(toMinute);
let toHour = 0;
if(resultMinute >= 60) {
    toHour = parseInt(resultMinute / 60);
    resultMinute = parseInt(resultMinute % 60);
}
let resultHour = parseInt(H) + parseInt(toHour);
if(resultHour >= 24) {
    resultHour -= 24;
}
console.log(`${resultHour} ${resultMinute} ${resultSecond}`);


// console.log('resultSecond',resultSecond);
// console.log('resultMinute',resultMinute);
// console.log('toHour',toHour);
// console.log('resultHour',resultHour);

// console.log(currentTime);
// console.log(cookTime);
// console.log('hms',H,M,S);
// console.log('resultMinute',resultMinute);
// console.log('takeHour',takeHour);
// console.log('resultHour',resultHour);

// const currentTime = input[0].split(' ');
// const cookTime = parseInt(input[1]);
// //let hour = parseInt(currentTime[0]);
// let [H, M, S] = currentTime;
// let toHour = 0;
// let toMinute = 0;
// let toSecond = 0;
// if(cookTime >= 3600) {
//     toHour = parseInt(cookTime / 3600);
//     toMinute = parseInt(cookTime % 3600);
//     console.log('tohour',toHour);
//     console.log('toMinute',toMinute);
// }
// let resultMinute = parseInt(toMinute / 60);
// console.log('resultMinute',resultMinute);




// console.log(H,M,S);
// console.log(typeof H);