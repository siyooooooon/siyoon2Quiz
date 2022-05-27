// file system import
const { transcode } = require('buffer');
let fs = require('fs');
const { format } = require('path');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

let countArray = [];
let trainCount = 0;
let maxCount = 0;

for(let i = 0; i < input.length; i++) {
    countArray[i] = input[i].split(' ');
}
console.log(countArray);
for(let i = 0; i < input.length - 1; i++) {
    for(let j = 0; j < input[i].length; j++) {

        //trainCount = trainCount + countArray[i][1] - countArray[i][0];

        console.log(countArray[i][j]);
        
        // if(Number(trainCount) > Number(maxCount)) {
        //     maxCount = trainCount;
        // }
        //console.log('traincount',trainCount);
    }
}
// console.log(trainCount)
// console.log(countArray);


// for(let i = 0; i < input.length; i++) {
//     trainCount[i] = input[i].split(' ');
// }
// let array = [];
// for(let i = 0; i < trainCount.length; i++) {
//     array.push(trainCount[i]);
// }
