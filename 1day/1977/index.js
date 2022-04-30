// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

let numM = Number(input[0]);
let numN = Number(input[1]);

let array = [];
for(let i = 1; i <= 100; i++) {
    array.push(i*i);
}
console.log('',array);

let resultArray = [];
for(let i = 0; i < array.length; i++) {
    if(numM <= array[i] && numN >= array[i]) {
        resultArray.push(array[i]);
    }
}
console.log('result',resultArray);

let sumValue = 0;
let minValue = resultArray[0];
for(let i = 0; i < resultArray.length; i++) {
    sumValue += resultArray[i];
    if(minValue > resultArray[i]) {
        minValue = resultArray[i]
    }
}
if(resultArray.length === 0) {
    console.log('-1');
} else {
    console.log('sumvalue', sumValue);
    console.log('minvalue', minValue);
}
