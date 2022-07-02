// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log('input',input);
let result = [];
let [N, ...arr] = input;
for(const number of arr) {
    result.push(number * 0.8);
    //console.log(result.toFixed(2));
    //console.log('result1', result);
    //console.log('number',number);
}
for(let i = 0; i < result.length; i++) {
    console.log(`${'$'}${result[i].toFixed(2)}`);
    //console.log('result',result[i]);
    // console.log('result2', result[i]);
}
/* const testCase = input[0];
let array = [];
for(let i = 1; i <= testCase; i++) {
    array.push(input[i]);
} */

/* toFixed() */