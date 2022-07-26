// file system import
const { count } = require('console');
const { setMaxListeners } = require('events');
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

// const testCase = parseInt(input[0]);
// input.shift();
//console.log(input);
// let countA = 0;
// let countB = 0; 
// for(let i = 0; i < testCase; i++) {
//     if(input[i] == 0){
//         countA += 1;
//     } else {
//         countB += 1;
//     }
//     console.log(countA,countB);
// }
// if(countA > countB) {
//     console.log('Junhee is not cute!');
// } else {
//     console.log('Junhee is cute!');
// }

let countA = 0;
let countB = 0; 
for(let i = 1; i <= parseInt(input[0]); i++) {
    if(input[i] == 0){
        countA += 1;
    } else {
        countB += 1;
    }
}
if(countA > countB) {
    console.log('Junhee is not cute!');
} else {
    console.log('Junhee is cute!');
}