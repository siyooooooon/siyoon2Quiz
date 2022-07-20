// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('');

console.log(input);
const first = 10;
let count = 0;
for(let i = 0; i < input.length; i++) {
    for(let j = i + 1; j < input.length; j++) {

        //console.log('ij',i, j);
        if(input[i] === input[j]) {
            count += 5;
            //console.log('count',count);
        } else {
            count += 10;

        }
    }
}
console.log(first + count);