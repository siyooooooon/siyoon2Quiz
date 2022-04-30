// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().split('\n');

//const array = input[0].split(' ')
// let array = [];
// for (let i=0; i<input.length; i++) {
//     array.push(input[i]);
// }
let numN = input[0];
const array = input[1].split(' ');
const sum = 0;
for(let i=0; i<array.length; i++) {
    sum += array[i];
}

console.log('array', array);


// N개의 숫자가 공백없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램 작성
// 첫째 줄에 숫자의 개수 N이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.Number 