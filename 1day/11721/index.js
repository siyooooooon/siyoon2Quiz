// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().split(' ');
let input = fs.readFileSync('./1day/test.txt').toString();


//const array = input[0].split(' ')
// let array = [];
// for (let i=0; i<input.length; i++) {
//     array.push(input[i]);
// }

let result = '';
for(let i = 0; i < input.length; i++) {
    result += input[i];
    if (result.length === 10) {
        console.log(result);
        result = '';
    }
}
console.log(result);




// 문제
// 알파벳 소문자와 대문자로만 이루어진 길이가 N인 단어가 주어진다.

// 한 줄에 10글자씩 끊어서 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 단어가 주어진다. 단어는 알파벳 소문자와 대문자로만 이루어져 있으며, 길이는 100을 넘지 않는다. 길이가 0인 단어는 주어지지 않는다.

// 출력
// 입력으로 주어진 단어를 열 개씩 끊어서 한 줄에 하나씩 출력한다. 단어의 길이가 10의 배수가 아닌 경우에는 마지막 줄에는 10개 미만의 글자만 출력할 수도 있다.