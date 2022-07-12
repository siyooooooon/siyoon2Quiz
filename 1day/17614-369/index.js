// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('');

// console.log(input);
const numberN = parseInt(input[0]);
let clap = 0;
let array = [];
let clapNum = [];
for(let i = 1; i <= numberN; i++) {
    array[i].push(i);
}
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
    //clapNum = array[j].split(' ');
    console.log(clapNum);
    if(array[i] === 3) {
        clap += 1;
    }
    if(array[i] === 6) {
        clap += 1;
    }
    if(array[i] === 9) {
        clap += 1;
    }
}
console.log('clap',clap);