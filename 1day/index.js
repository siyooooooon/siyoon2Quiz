// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().split(' ');
let input = fs.readFileSync('./1day/test.txt').toString().split(' ');

// let wordArray = [];
// for (let i=0; i<input.length; i++) {
//     wordArray.push(input[i]);
// }
// console.log('wordArray',wordArray);
// //const reverseArray = wordArray.reverse();
// const reverseArray = [];

// for(let i = wordArray.length - 1; i >= 0; i--) {
//     reverseArray.push(wordArray[i]);
// }

// if (wordArray === reverseArray) {
//     console.log('1');
// } else {
//     console.log('0');
// }

// JSON.stringify(a1) === JSON.stringify(a2))

//console.log('reverseArray',reverseArray);


// let wordArray = [];
// for (let i=0; i<input.length; i++) {
//     wordArray.push(input[i]);
// }
// console.log(wordArray);
const string = input[0];

const reverseString = string.split('').reverse().join('');

if(string === reverseString) {
    console.log('1');
} else {
    console.log('0');
}

console.log(reverseString);


// let result = '';
// for(let i = 0; i < input.length; i++) {
//     result += input[i];
//     if (result.length === 10) {
//         console.log(result);
//         result = '';
//     }
// }
// console.log(result);




// 알파벳 소문자로만 이루어진 단어가 주어진다. 이때, 이 단어가 팰린드롬인지 아닌지 확인하는 프로그램을 작성하시오.

// 팰린드롬이란 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어를 말한다. 

// level, noon은 팰린드롬이고, baekjoon, online, judge는 팰린드롬이 아니다.

// 입력
// 첫째 줄에 단어가 주어진다. 단어의 길이는 1보다 크거나 같고, 100보다 작거나 같으며, 알파벳 소문자로만 이루어져 있다.

// 출력
// 첫째 줄에 팰린드롬이면 1, 아니면 0을 출력한다.