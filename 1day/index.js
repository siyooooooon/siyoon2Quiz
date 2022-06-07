// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('');

console.log(input);
let count = 0;
for(let i = 0; i < input.length - 1; i++) {
    let word = input[i];
    for(let j = 0; j < input.length - i - 1; j++) {
        if(input[j] === input[j + 1]) {


        }
    }
}

for(let i = 0; i < array.length - 1; i++) {
    let minNum = array[i];
    for(let j = 0; j < array.length - i - 1; j++) {
        if(array[j] > array[j + 1]) {
            minNum = array[j];
            array[j] = array[j + 1];
            array[j + 1] = minNum;
        }
    }
}