// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split(' ');

console.log(input);
const numberN = parseInt(input[0]);

for(let i = 0; i < numberN + 2; i++) {
    let square = '';
    if(i === 0 || i === numberN + 1) {
        for(let j = 0; j < numberN + 2; j++) {
            square += '@';
        }   
    } else {
        for(let j = 0; j < numberN + 2; j++) {
            if(j === 0 || j === numberN + 1) {
                square += '@';
            } else {
                square += ' ';
            }
        }
    }
   console.log(square);
}
