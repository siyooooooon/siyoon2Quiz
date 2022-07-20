// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);
const textCase = input[0];
input.shift();
console.log(input);
for(let i = 0; i < input.length; i++) {
    //console.log(input[i]);
    let sumArray = input[i].split(' ');
    //console.log(sumArray);
    function sum(arr) {
        let sum = 0;
        arr.forEach((value) => {
            sum += parseInt(value);
        });
        return sum;
    }
    console.log(sum(sumArray));
}
// function sum(arr) {
//     let sum = 0;
//     let sumArray = input.split(' ');
//     sumArray.forEach((value) => {
//         sum += parseInt(value);
//     });
//     return sum;
// }
// console.log(sum(input));
