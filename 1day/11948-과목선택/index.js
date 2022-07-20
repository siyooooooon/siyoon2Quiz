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


// 찬구
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i => parseInt(i));

// let sum = input.reduce((accumulator, current) => accumulator + current, 0);

// let candArr = []

// for (let i = 0; i <= 3; i++) {
//     const sciScore = input[i];

//     for (let j = 4; j <= 5; j++) {
//         const etcScore = input[j];

//         let candScore = sum;
//         candScore -= sciScore
//         candScore -= etcScore

//         candArr.push(candScore)
//     }
// }

// let answer = candArr.sort((a, b) => a - b).pop();

// console.log(answer)