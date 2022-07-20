// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split(' ');

console.log(input);


// for(let i = 0; i < input.length - 1; i++) {
//     let minNum = input[i];
//     for(let j = 0; j < input.length - i - 1; j++) {
//         if(input[j] > input[j + 1]) { // array[j] 값이 다음 인덱스 값보다 클 때
//             minNum = input[j];
//             input[j] = input[j + 1];
//             input[j + 1] = minNum;
//         }
//     }
// }
// console.log(`${input[0]} ${input[1]} ${input[2]}`);
// input.sort();
// console.log(input);
let minNum = parseInt(input[0]);
let maxNum = parseInt(input[0]);
let midNum = parseInt(input[0]);
for(let i = 0; i < input.length; i++) {
    if(parseInt(input[i]) < minNum) {
        minNum = parseInt(input[i]);
    }
}
for(let i = 0; i < input.length; i++) {
    if(parseInt(input[i]) > maxNum) {
        maxNum = parseInt(input[i]);
    }
}
for(let i = 0; i < input.length; i++) {
    if(parseInt(input[i]) != minNum && parseInt(input[i]) != maxNum) {
        midNum = parseInt(input[i]);
    }
}



console.log(minNum, midNum ,maxNum);