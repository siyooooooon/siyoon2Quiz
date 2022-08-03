// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split(' ');

console.log(input);

let num = parseInt(input[0]);

for(let i = 1; i <= num * 5; i++) {
    let V = '';
    if(i <= num) {
        for(let j = 1; j <= num * 5; j++) {
            V = V + '@';
        }
    } else {
        for(let j = 1; j <= num * 5; j++) {
            if(j > num) {
                V = V + '';
            } else {
                V = V + '@';
            }
        }
    }
    console.log(V);
}

// 찬구
// let res = ''

// for (let i = 1; i <= N; i++) {
//     res += '@'.repeat(N * 5)
//     res += '\n'
// }

// for (let i = 1; i <= N * 4 ; i++) {
//     res += '@'.repeat(N)

//     if(i !== N * 4) {
//         res += '\n'
//     }
// }

// console.log(res)

// 아라
// let result = '';

// for(let i=0; i<5*num; i++) {
//     for(let j=0; j<5*num; j++) {
//         if(i >= num && j >= num) {
//             result += '';
//         } else {
//             result += '@';
//         }
//     }
//     result += '\n';
// }

// console.log(result);