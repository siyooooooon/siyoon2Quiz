// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);

const testCase = input[0];
const Quarter = 25;
const Dime = 10;
const Nickel = 5;
const Penny = 1;
let change = 0;

for(let i = 1; i <= testCase; i++){
    let Q = parseInt(input[i] / Quarter);
    change = input[i] % Quarter;
    let D = parseInt(change / Dime);
    change = change % Dime; 
    let N = parseInt(change / Nickel);
    change = change % Nickel;
    let P = parseInt(change / Penny);
    change = change % Penny;

    // console.log('q', Q);
    // console.log('d', D);
    // console.log('n', N);
    // console.log('p', P);
    // console.log('change',change);
    if(change === 0) {
        console.log(`${Q} ${D} ${N} ${P}`);
    }
}




// 명수풀이
// let [TC, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// for(let n of arr){
//     const res = [0,0,0,0];
//     while(n > 0){
//         if(n >= 25) {
//             ++res[0];
//             n -= 25;
//         }else if(n >= 10) {
//             ++res[1];
//             n -= 10;
//         }else if(n >= 5) {
//             ++res[2];
//             n -= 5;
//         }else{
//             res[3] += n;
//             n = 0;
//         }
//     }
//     console.log(`${res[0]} ${res[1]} ${res[2]} ${res[3]}`);
// }
