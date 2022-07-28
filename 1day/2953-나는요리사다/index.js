// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

// console.log(input);

let i = 0;
let arr = [];
while(i < input.length) {
    let sum = 0;

    let score = input[i].split(' ');
    console.log(score);

    score.forEach((value) => {
        sum += parseInt(value);
    });
    //console.log(i, sum);
    arr.push(sum);
    
    i++
}
console.log(arr);
let max = Math.max(...arr);
let index = arr.indexOf(max);
//console.log('sss',Math.max(...arr));
console.log((index + 1), max);




