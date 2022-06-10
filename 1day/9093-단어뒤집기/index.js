// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

// console.log(input);
//let [N, ...arr] = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');
let [N, ...arr] = input;
for(const str of arr)
    console.log( str.trim().split('').reverse().join('').split(' ').reverse().join(' ') );
    //console.log('1',str.trim().split(''));
    //console.log('2',str.trim().split('').reverse());
    //console.log('3',str.trim().split('').reverse().join(''));
    //console.log('4',str.trim().split('').reverse().join('').split(' '));
    //console.log('5',str.trim().split('').reverse().join('').split(' ').reverse());
    //console.log('6',str.trim().split('').reverse().join('').split(' ').reverse().join(' '));

    console.log('N',N);
// const testCase = input[0];
// //let array = [];
// let reverseString = [];

// for(let i = 1; i < input.length; i++) {
//    /*  let string = input[i];
//     console.log('input',input[i]);
//     console.log('string', string);
//     reverseString.push(string.split('').reverse().join(''));
//     console.log('reverseString',reverseString); */
//     let sentence = input[i];
//     reverseString.push(sentence.trim().split('').reverse(' ').join(''));
// }
// // console.log('array', reverseString);
// let wordResult = [];
// for(let i = 0; i < reverseString.length; i++) {
//     //reverseString[i].reverse();\
//     //console.log('reverseString',reverseString[i].reverse());
//     wordResult.push(reverseString[i].trim().split(' '));
// }
// console.log('reverseString', reverseString);
// console.log('reverseString', reverseString[0]);
// console.log('reverseString', reverseString[1]);

// // console.log('wordResult',wordResult);
// // console.log('wordResult0',wordResult[0]);
// // console.log('wordResult1',wordResult[1]);
// let array = [];
// for(let i = 0; i < wordResult.length; i++) {
  /*   for(let j = 0; j < wordResult[i].length; j++) {
        //array.push(wordResult[i][j].trim().split('').join(''));
        //array.push(wordResult[i].split(' '));
        //console.log('wordResult', wordResult[i][j]);
     
    } */
    //array.push(wordResult.reverse());
    // console.log('wordResult00', wordResult[0][0]);
    // console.log('wordResult01', wordResult[0][1]);
    // console.log('wordResult02', wordResult[0][2]);
    // console.log('wordResult03', wordResult[0][3]);
    // console.log('wordResult10', wordResult[1][0]);
    // console.log('wordResult11', wordResult[1][1]);
    // console.log('wordResult12', wordResult[1][2]);
    // console.log('wordResult13', wordResult[1][3]);
    // console.log('wordResult14', wordResult[1][4]);
    // console.log('wordResult15', wordResult[1][5]);
    // console.log('wordResult16', wordResult[1][6]);
    // //array.reverse();
    // wordResult.reverse();

    /* console.log('wordResult00', array[0][0]);
    console.log('wordResult01', array[0][1]);
    console.log('wordResult02', array[0][2]);
    console.log('wordResult03', array[0][3]);
    console.log('wordResult10', array[1][0]);
    console.log('wordResult11', array[1][1]);
    console.log('wordResult12', array[1][2]);
    console.log('wordResult13', array[1][3]);
    console.log('wordResult14', array[1][4]);
    console.log('wordResult15', array[1][5]);
    console.log('wordResult16', array[1][6]); */
    /* console.log('array',array);
    console.log('array',array[0]);
    console.log('array',array[1]); 
    
}*/
//console.log('array',array[0]);


// console.log('reverseString',reverseString);
/* console.log('result',result); */

/* console.log('wordResult',wordResult[0]);
console.log('wordResult',wordResult[1]);


console.log('wordResult',wordResult);*/
/* console.log('wordResult',wordResult[0]);
console.log('wordResult',wordResult[1]);  */
