// file system import
const { count } = require('console');
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

//console.log(input);
for(let i = 0; i < input.length; i++) {
    //console.log('iiiiiii',input[i]);
    let num = input[i].trim().split('');
    if(input[i] == 0) {
        break;
    }
    function sum(arr) {
        //console.log(num);
        let sum = 0;
        arr.forEach((value) => {
            sum += parseInt(value);
        });
        if(sum.toString().length >= 2) {
            let result = sum.toString().split('');
            //console.log('result',result);
            // result.forEach((value) => {
            //     sum += parseInt(value);
            //     //console.log('sumsum',result);
            //     console.log();
            // });
            return parseInt(result[0]) + parseInt(result[1]);
        }
        // console.log(sum.length);
        return parseInt(sum);
    }
    console.log(sum(num));
}



// let num = [];
// for(let i = 0; i < input.length; i++) {
//     num.push(input[i].trim().split(''));
// }

// function sum(arr) {
//     console.log(num);
//     let sum = 0;
//     arr.forEach((value) => {
//         sum += parseInt(value);
//         console.log('sumsum',sum);
//         if(sum.toString().length > 1) {
//             let result = sum.toString().split('');
//             //console.log('result',result);
//             result.forEach((value) => {
//                 sum += parseInt(value);
//                 //console.log('sumsum',sum);
//             });
//         }
//     });
//     // console.log('length',sum.toString().length);
//     //console.log(typeof sum);
//     return sum;
// }
// console.log(sum(num));




// input.forEach((value) => {
//     let num = value.trim().split('');
//     let count = 0;
//     //console.log('num',num);
//     for(let i = 0; i < num.length; i++) {
//         ///console.log('jjj',num[i]);
//         for(let j = 0; j < num[i].length; j++) {
//             console.log('ij =',num[i][j]);

//         }
//     }
//     console.log(count);
// });