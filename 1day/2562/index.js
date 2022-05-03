// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

//const array = input[0].split(' ')
// let array = [];
// for (let i=0; i<input.length; i++) {
//     array.push(input[i]);
// }
let maxValue = input[0];
let maxValueIndex = 1;
for(let i=0; i<input.length; i++) {
    if(Number(input[i]) > maxValue) {
        maxValue = Number(input[i]);
    }
    if(maxValue === Number(input[i])) {
        maxValueIndex = i + 1;
        console.log('i',i);
    }
}

console.log(maxValue);
console.log(maxValueIndex);

// console.log('input array',input);
// console.log('maxValue',maxValue);
// console.log('maxValueIndex',maxValueIndex);

// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

// 예를 들어, 서로 다른 9개의 자연수

// 3, 29, 38, 12, 57, 74, 40, 85, 61

// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

// 입력
// 첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

// 출력
// 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.
