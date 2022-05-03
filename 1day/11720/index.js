// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

let numN = input[0];
let array = input[1].split('');
let sum = 0;
for(let i=0; i<array.length; i++) {
    sum += Number(array[i]);
}


console.log('array', array);
console.log('sum', sum);


// N개의 숫자가 공백없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램 작성
// 첫째 줄에 숫자의 개수 N이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.Number 