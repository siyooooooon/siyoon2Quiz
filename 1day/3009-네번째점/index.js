// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

//console.log('input',input);
let arrayX = [];
let arrayY = [];
for(let i = 0; i < input.length; i++) {
    let array = input[i].split(' ');
    // console.log('array',array);
    // console.log('array[0]',array[0]);
    // console.log('array[1]',array[1]);
    arrayX.push(array[0]);
    arrayY.push(array[1]);
}
//console.log('X',arrayX);
let X = 0;
let Y = 0;

for(let i = 0; i < arrayX.length; i++ ) {
    const num = arrayX[0];
    for(let j = i + 1; j < arrayX.length; j++) {
         if(num === arrayX[j]) {
            let numX = arrayX.filter((element) => element !== arrayX[j]);
            X = numX;
        }
    }
}
//console.log('Y',arrayY);

// for(let i = 0; i < arrayY.length; i++ ) {
//     const num1 = arrayY[0];
//     for(let j = i + 1; j < arrayY.length; j++) {
//          if(num1 === arrayY[j]) {
//             //console.log('yyy',arrayY[j]);
//             let numY = arrayY.filter((element) => element !== arrayY[j]);
//             console.log('Yarray',parseInt(numY));
//         }
//     }
// }
for(let i = 0; i < arrayY.length; i++) {
    const firstNum = parseInt(arrayY[0]);
    for(let j = i + 1; j < arrayY.length; j++) {
        //console.log('yy',arrayY[j]);
        //console.log('fn',firstNum);
        if(firstNum === parseInt(arrayY[j])) {
            let numY = arrayY.filter((element) => element !== parseInt(arrayY[j]));
            Y = numY;
        }
    }
}



console.log('XY',X, Y);