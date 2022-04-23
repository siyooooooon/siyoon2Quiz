// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().split('\n');

const array = input[1].split(' ');

const N = input[0]; // 과목 개수
let maxM = array[0]; // 점수 최대값
let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) > maxM) {
        maxM = Number(array[i]);
    }
    sum += Number(array[i]);
}

let result = 0;
result += (sum / maxM * 100) / N;

console.log('array',array);
console.log('maxM', maxM);
console.log('result', result);


