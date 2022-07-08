// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('');
let input = fs.readFileSync('./1day/test.txt').toString().toLowerCase();

console.log(input);

// const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// let count = new Array(26).fill(0);

// for (let i = 0; i < input.length; i++) {
//     count[input.charCodeAt(i) - 97] ++;
//   }
// // for(let i = 0; i < alphabet.length; i++) {
   
// // }
// console.log(count);
const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97] ++;
}

const max = Math.max(...result);
const index = result.indexOf(max);


console.log(result.indexOf(max));
let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));