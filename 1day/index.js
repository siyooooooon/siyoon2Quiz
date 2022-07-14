// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);
const numT = Number(input[0]);
input.shift();
let array = input[0].trim().split(' ');

for(let i = 0; i < array.length; i++) {
    let arrDivision = [];
    console.log(array[i]);
    for(let j = 1; j <= array[i]; j++) {
        if(array[i] % j === 0) {
            arrDivision.push(j);
        }
    }
    console.log(arrDivision);
    
}
function plus(array) {
        
}
// array.forEach((value) => {
//     for(let i = 1; i <= value; i++) {  
//         if(value % i === 0) {
//             arrayD.push(i);
//         }

//     }
// });
// console.log(arrayD);



// function number(arr) {
//     let arrayD = [];
//     let result = [];
//     arr.forEach((value) => {
//         for(let i = 1; i <= value; i++) {
            
//             if(value % i === 0) {
//                 arrayD.push(i);
//             }
//         }
//     });
// }

// function average(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum += parseInt(value);
//     });

//     return sum / arr.length;
// }

// function result(strArr) {
//     const arr = strArr.split(' ');
//     const A = parseInt(arr[0]);
//     const B = parseInt(arr[1]);

//     if (A > B) {
//         aCount++;
//     } else if (A < B) {
//         bCount++;
//     }
// }
