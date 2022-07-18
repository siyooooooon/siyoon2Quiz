// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);
const arrayA = [];
let sum = 0;
for(let i = 0; i < 4; i++) {
    arrayA.push(parseInt(input[i]));
}
input.splice(0, 4);
console.log('input',input);
console.log('science',arrayA);
let minValueA = Math.min(...arrayA);
console.log('minValueA',minValueA);


let minValueB = Math.min(...input);
console.log('minValueB',minValueB);

function plus(arr) {
    let sum = 0;
    arr.forEach((value) => {
        sum += parseInt(value);
    });

    return sum;
}
console.log('plus',plus(arrayA));
console.log('plusinput',plus(input));
console.log('plusinput',plus(input) + plus(arrayA) - minValueA - minValueB);