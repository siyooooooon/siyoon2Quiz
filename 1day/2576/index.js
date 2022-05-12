// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

let array = [];

for(let i = 0; i < input.length; i++) {
    array[i] = input[i].split(' ');
}

let maxValue = 0;
let numX = 0;
let numY = 0;

for(let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if(Number(maxValue) < Number(array[i][j])) {
            maxValue = array[i][j];
            numX = i;
            numY = j;
        }
    }
}
console.log(`${maxValue}\n${numX + 1} ${numY + 1}`);
