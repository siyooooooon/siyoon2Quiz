// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');

console.log(input);

const numA = input[0].split('');
const numB = input[1].split('');
let maxLength = 0;
if(numA.length === numB.length) {
    maxLength = numA.length;
} else if(numA.length > numB.length) {
    maxLength = numA.length;
} else {
    maxLength = numB.length;
}
console.log('max',maxLength);

const resultA = [];
const resultB = [];

for(let i = 0; i < maxLength; i++) {
    if(numA[i] === '6') {
        numA[i] = '5';
    }
    if(numB[i] === '6') {
        numB[i] = '5';
    }
}
resultA.push(parseInt(numA.join('')) + parseInt(numB.join('')));
console.log('resultA',resultA);

for(let i = 0; i < maxLength; i++) {
    if(numA[i] === '5') {
        numA[i] = '6';
    }
    if(numB[i] === '5') {
        numB[i] = '6';
    }
    
}
resultB.push(parseInt(numA.join('')) + parseInt(numB.join('')));
console.log('resultB',resultB);

console.log(resultA + ' ' + resultB);

