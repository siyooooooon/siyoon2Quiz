// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');

console.log(input);

input = input[0];

const Croatian = ['c=','c-','dz=','d-','lj','nj','s=','z='];
let count = 0;
let result = 0;
for(let i = 0; i < Croatian.length; i++) {
    //console.log('replace',input.replace(Croatian[i], ''));
    if(input !== input.replace(Croatian[i], '')){
        count += 1;
        input = input.replace(Croatian[i], ' ');
        console.log('input',input !== input.replace(Croatian[i], ''));
    }
    result = count + input.split(' ').join('').length;
    //console.log('result-replace',check + input.split(' ').join('').length);
}
console.log('result',result);














