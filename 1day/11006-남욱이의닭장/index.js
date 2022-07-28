// file system import
const { count } = require('console');
const { setMaxListeners } = require('events');
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);
const testCase = parseInt(input[0]);
input.shift();
let regs = 0;
let chickenNum = 0;
input.forEach((value) => {
    let result = value.split(' ');
    //console.log(result);
    let chickenRegs = parseInt(result[0]);
    let chicken = parseInt(result[1]);
    //console.log('다리갯수 닭',chickenRegs,chicken);

    regs = chicken * 2 - chickenRegs;
    chickenNum = chicken - regs;
    console.log(`${regs} ${chickenNum}`);
});


//명수
// let [[N],...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" ").map(Number));
// while(N--){
//     let arr = input.shift();
//     let n = arr[0]-arr[1];
//     console.log(`${arr[1]-n} ${n}`);
// }