// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');
let numX = input[0];
let numY = input[1];

// let reverseX = numX.split('').reverse().join('');
// let reverseY = numY.split('').reverse().join('');

// let result = (Number(reverseX) + Number(reverseY));

// let reverseResult = Number(result).split('').reverse().join('');

// const reverseValue = (numValue) => {
//     let reverse = numValue.split('');
    
//     reverse = reverse.reverse();
    
//     return parseInt(reverse.join(''))
// }
// const result = reverseValue(numX) + reverseValue(numY);

// const reverseResult = (result) => {
//     let reverseNum = result.toString().split('');

//     reverseNum = reverseNum.reverse();

//     return parseInt(reverseNum.join(''));
// }
function reverseValue(numValue) {
    let reverse = numValue.split('');
    
    reverse = reverse.reverse();
    
    return parseInt(reverse.join(''))
}
const result = reverseValue(numX) + reverseValue(numY);

function reverseResult(result) {
    let reverseNum = result.toString().split('');

    reverseNum = reverseNum.reverse();

    return parseInt(reverseNum.join(''));
}

console.log('result', result);
console.log('reverseResult',reverseResult(result));
// console.log(reverseValue(result));

// console.log('numX',numX);
// console.log('numY',numY);
// console.log('reverseX', reverseX);
// console.log('reverseY', reverseY);
// console.log('result', result);
// console.log('reverseResult', reverseResult);




// 어떤 수 X가 주어졌을 때, X의 모든 자리수가 역순이 된 수를 얻을 수 있다. Rev(X)를 X의 모든 자리수를 역순으로 만드는 함수라고 하자.
// 예를 들어, X=123일 때, Rev(X) = 321이다. 그리고, X=100일 때, Rev(X) = 1이다.
// 두 양의 정수 X와 Y가 주어졌을 때, Rev(Rev(X) + Rev(Y))를 구하는 프로그램을 작성하시오
// 첫째 줄에 수 X와 Y가 주어진다. X와 Y는 1,000보다 작거나 같은 자연수이다.