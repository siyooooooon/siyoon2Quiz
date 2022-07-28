// file system import
const { count } = require('console');
const { setMaxListeners } = require('events');
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);
let i = 0;
while(i < input.length) {
    if(input[i] == '# 0 0') {
        break;
    }
    let member = input[i].split(' ');
    //console.log(member);
    if(parseInt(member[1]) > 17 || parseInt(member[2]) >= 80) {
        console.log(member[0], 'Senior');
    } else {
        console.log(member[0], 'Junior');
    }
    //console.log(input[i]);
    i++
}









// let i = 0;
// while(i < input.length) {
//     console.log(input[i]);
//     input
//     i++
// }