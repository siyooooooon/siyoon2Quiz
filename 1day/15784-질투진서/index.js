// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);
let num = input[0].split(' ');
const numN = num[0];
let array = [];

for(let i = 1; i <= numN; i++) {   
    for(let j = 0; j < input[i].length; j++) {
        let arrayB = input[i].split(' ');

        //array.push(input[i].split(' '));
    }
}



//console.log(array);
console.log(array[0][0]);
console.log(array[0][1]);
console.log(array[0][2]);
console.log(array[0][3]);
console.log(array[0][4]);

console.log(array[1][0]);
console.log(array[1][1]);
console.log(array[1][2]);
console.log(array[1][3]);
console.log(array[1][4]);

console.log('3행',array[2][0]);
console.log('3행',array[2][1]);
console.log('3행',array[2][2]);
console.log('3행',array[2][3]);
console.log('3행',array[2][4]);