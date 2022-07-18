// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split(' ');

//console.log(input);
const numN = parseInt(input[0]);
let array = [];
for(let i = 0; i <= 30; i++) {
    array.push(Math.pow(2,i));
}
console.log('arr',array);
let str = false;
for(let j = 0; j < array.length; j++) {
    // console.log('length',array.length);
    // console.log('arr',array[j]);
    if(parseInt(array[j]) === numN) {
        str = true;
    }
}
if(str === true) {
    console.log('1');
} else {
    console.log('0');
}
// console.log('array',array,numN);
// array.forEach((value) => {
//     // console.log('v',value);
//     // console.log('nunN',numN);
//     if(numN === value) {
//         console.log(1);
//         return false;
//     } else {
//         console.log(0);
//         return false;
//     }
    
// });


//찬구
// let N = parseInt(input[0])
// let a;

// if(N === 1) {
//     console.log(1)
//     return;
// }

// while (true) {
//     a = N % 2;
//     if (a === 1) {
//         console.log(0)
//         return
//     }
//     N = parseInt(N / 2);
//     if (N === 1) {
//         if (a === 1) {
//             console.log(0)
//             return
//         } else {
//             console.log(1)
//             return
//         }
//     }
// }