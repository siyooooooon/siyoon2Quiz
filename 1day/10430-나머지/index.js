// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');
let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');

// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C,
// 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

let numA = Number(input[0]);
const numB = Number(input[1]);
const numC = Number(input[2]);

let resultA = 0;
let resultB = 0;
let resultC = 0;
let resultD = 0;

resultA = (numA + numB) % numC;
resultB = ((numA % numC) + (numB % numC)) % numC;
resultC = (numA * numB) % numC;
resultD = ((numA % numC) * (numB % numC)) % numC;
console.log(Number(resultA));
console.log(Number(resultB));
console.log(Number(resultC));
console.log(Number(resultD));