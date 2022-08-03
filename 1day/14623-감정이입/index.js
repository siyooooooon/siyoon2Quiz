// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

//console.log(input);
let resultNum = [];
for(let i = 0; i < input.length; i++) {
    // console.log(input[i]);
 
    input.forEach((value) => {
        resultNum.push(parseInt(value,2));
    });

}
let bin = BigInt(resultNum[0]) * BigInt(resultNum[1]);

console.log(bin.toString(2));




// 10진수로 변환
// function decimalNumber(arr){
//     let result = 0;
//     let resultNum = [];
//     arr.forEach((value) => {
//         resultNum.push(parseInt(value,2));
//     });
//     //console.log('resultNum',resultNum);
//     result = parseInt(resultNum[0]) * parseInt(resultNum[1]);
//     return result;
// }



// //console.log('10진수',decimalNumber(input));
// let number = decimalNumber(input);

// // 2진수로 변환
// function binaryNumber(num){
//     let result = BigInt(num).toString(2);
//     return result;
// }

// //console.log('2진수',binaryNumber(decimalNumber(input)));

// console.log(binaryNumber(number));
// console.log(typeof binaryNumber(number));



// 2 > 10 
// var bin = "1111011";
// var dec = parseInt(bin, 2); // === "123"
// 10진수 -> 2진수
// var dec = 123;
// var bin = dec.toString(2); // === "1111011"