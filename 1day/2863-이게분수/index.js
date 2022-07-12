// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

// console.log(input);
// let array = [];
// for(let i = 0; i < input.length; i++) {
//    array.push(input[i].split(' '));
// }
// const flatArr = array.flat();
// let value = flatArr[2];
// flatArr.splice(2,1);
// flatArr.push(value);
// console.log(flatArr);

// let result = [];
// for(let i = 0; i < 4; i++) {
//     result.push(parseInt((flatArr[0] / flatArr[2]) + (flatArr[1] / flatArr[3])));
//     //console.log('Number',Number((flatArr[0] / flatArr[2]) + (flatArr[1] / flatArr[3])));
//     console.log('Number',flatArr[0], flatArr[2], flatArr[1], flatArr[3]);
//     flatArr.unshift(flatArr[3]);
//     console.log('plus',flatArr);
//     flatArr.splice(4, 1);
//     console.log('minus',flatArr);
// }
// //console.log(Number((flatArr[0] / flatArr[2]) + (flatArr[1] / flatArr[3])));
// console.log('result',result);
// const maxValue = Math.max(...result);
// console.log(result.indexOf(maxValue));

//console.log('result',result);
// var numbers = [[1,2,3],[4,5,6],[7,8,9]]; //array안에 array가 있는 경우
// var newNumbers = numbers.map(array => array.map(number => number *2));
// console.log('newNumbers',newNumbers[0]);

let array = [];
for(let i = 0; i < input.length; i++) {
   array.push(input[i].split(' '));
}
const flatArr = array.flat(); // 배열 합치기
let value = flatArr[2]; 
flatArr.splice(2,1);
flatArr.push(value); // 배열 순서 바꿔주기
console.log(flatArr);
let result = [];
for(let i = 0; i < 4; i++) {
    result.push(parseInt((flatArr[0] / flatArr[3]) + (flatArr[1] / flatArr[2])));
    console.log('resultarray',flatArr[0] ,flatArr[3],flatArr[1], flatArr[2]);
    flatArr.unshift(flatArr[3]);
    flatArr.splice(4, 1);
    console.log('flatArr',flatArr);
}
console.log('result',result);
const maxValue = Math.max(...result);
console.log(parseInt(result.indexOf(maxValue)));
