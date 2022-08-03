// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split(' ');
//let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n')[0]
//console.log(input);

let value = input[0];
let count = 0;

function M(value) {
    let tmp = 1;
    
    for(let i = 0; i < value.length; i++) {
        const N = value[i];
        //console.log(value[i]);
        tmp *= parseInt(N);
    }
    count++;
    return tmp.toString();
}

while(true) {
    if(value.length === 1) {
        console.log(count);
        return;
    }
    value = M(value);
}
// M(value);
// 찬구
// let count = 0;
// function f(input) {
//     let tmp = 1;
  
//     for (let i = 0; i < input.length; i++) {
//         console.log(input[i]);
//         const e = input[i];
//         tmp *= parseInt(e);
//         //console.log(input[i]);
//         //console.log('tmp',tmp *= parseInt(e));
//     }
//     count++;
//     //console.log(tmp.toString());
//     return tmp.toString();
  
// }

// while (true) {
//     if(input.length === 1) {
//         console.log(count);
//         return;
//     }

//     input = f(input);
// }
