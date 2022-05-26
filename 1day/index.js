// file system import
const { transcode } = require('buffer');
const { sign } = require('crypto');
let fs = require('fs');
const { format } = require('path');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log('input', input)

let array = [];
const basicNum = 2;

for(let i = 0; i < input.length - 1; i++) {
    array.push(input[i].trim().split(''));
}
let signBoard = 0;
for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
        signBoard += 3;
        if(parseInt(array[i][j]) === 1) {
            signBoard -= 1;
        }
        if(parseInt(array[i][j]) === 0) {
            signBoard += 1;
        }
    }
    signBoard += array[i].length - 1;
    //console.log(`${signBoard + basicNum}\n`);
    console.log(signBoard + basicNum + '<br>');
    signBoard = 0;
}