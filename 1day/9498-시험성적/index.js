// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');

const score = input;

if(100 >= score && score >= 90) {
    console.log('A');
} else if(89 >= score && score >= 80) {
    console.log('B');
} else if(79 >= score && score >= 70) {
    console.log('C');
} else if(69 >= score && score >= 60) {
    console.log('D');
} else {
    console.log('F');
}
