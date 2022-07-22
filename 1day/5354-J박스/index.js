// file system import
const { count } = require('console');
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);
const testCase = input[0];
input.shift();
//console.log('testCase',testCase);
for(let test = 0; test < testCase; test++) {
    let numberN = parseInt(input[test]);
    for(let i = 0; i < numberN; i++) {
        let hash = '';
        if(i === 0 || i === numberN) {
            for(let j = 0; j < numberN; j++) {
                hash += '#';
            }
        } else if(i === numberN - 1) {
            for(let j = 0; j < numberN; j++) {
                hash += '#';
            }
        } else {
            for(let j = 0; j < numberN; j++) {
                // console.log('j numberN',j,numberN);
                if(j === 0 || j === numberN - 1) {
                    hash += '#';
                } else {
                    hash += 'J';
                }
            }
        }
       console.log(hash);
    }
    console.log(' ');
}

// const numberN = parseInt(input[0]);

// for(let i = 0; i < numberN + 2; i++) {
//     let square = '';
//     if(i === 0 || i === numberN + 1) {
//         for(let j = 0; j < numberN + 2; j++) {
//             square += '@';
//         }   
//     } else {
//         for(let j = 0; j < numberN + 2; j++) {
//             if(j === 0 || j === numberN + 1) {
//                 square += '@';
//             } else {
//                 square += ' ';
//             }
//         }
//     }
//    console.log(square);
// }
