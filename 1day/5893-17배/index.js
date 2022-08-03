let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split(' ');

// const input = require('fs').readFileSync("./1day/test.txt").toString().trim();
// console.log(input);
// let bin = "0b" + input;

// const answer = (BigInt(bin) * 17n).toString(2);
// console.log(answer);

const number = input[0];

function solution(num) {
    let dec = parseInt(num, 2);
    let bin = (BigInt(dec) * 17n).toString(2);
    //console.log(typeof BigInt(dec));
 
    //console.log(typeof BigInt(bin));
    return bin;
}

console.log(solution(number));
//console.log(typeof solution(number));


// 2 -> 10 
// var bin = "1111011";
// var dec = parseInt(bin, 2); // === "123"
// 10진수 -> 2진수
// var dec = 123;
// var bin = dec.toString(2); // === "1111011"