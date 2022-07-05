// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);

let testCase = input[0];
let textArray = [];
let indexArray = [];
for(let i = 1; i <= testCase; i++) {
    textArray.push(input[i]);
}

for(let j = 0; j < textArray.length; j++) {
    //indexArray.push(textArray[j].splice('').replace(textArray[j], j + '.' + ' ' + textArray));
    //indexArray[j] = textArray[j].splice('').replace(textArray[j], j + '.' + ' ' + textArray);
    //console.log(textArray[j]);
    console.log(textArray[j].replace(textArray[j], j+1 + '.' + ' ' + textArray[j]));
}









