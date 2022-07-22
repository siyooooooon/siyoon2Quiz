// file system import
const { count } = require('console');
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

// console.log(input);
const testCase = input[0];
input.shift();
const A = 350.34;
const B = 230.90;
const C = 190.55;
const D = 125.30;
const E = 180.90;
let resultA = 0;
let resultB = 0;
let resultC = 0;
let resultD = 0;
let resultE = 0;
for(let i = 0; i < testCase; i++) {
    let result = input[i].trim().split(' ');
    console.log(result);
    for(let j = 0; j < result.length; j++) {
        resultA = A * parseInt(result[0]);
        resultB = B * parseInt(result[1]);
        resultC = C * parseInt(result[2]);
        resultD = D * parseInt(result[3]);
        resultE = E * parseInt(result[4]);
    }
    console.log('$' + (resultA + resultB + resultC + resultD + resultE).toFixed(2));
}


// 아라
// 부품의 가격
// const A = 350.34;
// const B = 230.9;
// const C = 190.55;
// const D = 125.3;
// const E = 180.9;

// for (const item of input) {
//     resultCalc(item);
// }

// function resultCalc(str) {
//     const arr = str.split(' ');

//     const aNum = arr[0];
//     const bNum = arr[1];
//     const cNum = arr[2];
//     const dNum = arr[3];
//     const eNum = arr[4];

//     const result = A * aNum + B * bNum + C * cNum + D * dNum + E * eNum;
//     console.log(`$${result.toFixed(2)}`);
// }

//명수
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" ").map(Number));
// input.shift();
// let obj = [350.34,230.90,190.55,125.30,180.90];
// for(let arr of input){
//     let s = 0;
//     for(let i=0; i<5; ++i){
//         s += obj[i] * arr[i];
//     }
//     console.log(`$${s.toFixed(2)}`);
// }