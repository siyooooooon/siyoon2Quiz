// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

let array = [];

for(let i = 0; i < input.length; i++) {
    array[i] = input[i].split(' ');
}

let maxValue = 0;
let numX = 0;
let numY = 0;

for(let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if(Number(maxValue) < Number(array[i][j])) {
            maxValue = array[i][j];
            numX = i;
            numY = j;
        }
    }
}
console.log(`${maxValue}\n${numX + 1} ${numY + 1}`);

    // for(let j = 0; j < array[i].length; j++) {
    //     resultArray[i][j] = array[j][i];
    //     console.log(resultArray);
    // }
// console.log(array[1][7]);



// for(let i = 0; i < input.length; i++) {
//     let array = [];
//     let result = [];
//     for(let j = 0; j < input[i].length; j++) {
//         array = input[i].split(' ');
//         // resultArray[i][j] = input[j][i];
//         // let maxValue = array[0];
//         // if(maxValue < Number(array[i])) {
//         //     maxValue = Number(array[i]);
//         //     // console.log('maxValue', maxValue);
//         // }
         
//     }
//     result = [array[i]];   
//     console.log(result);
//     //console.log('result',result);
//     //console.log(array);
//     //const resultArray = Array.from(Array(array.length),() => new Array(array[0].length));
//     //console.log('result', resultArray);
    
// }

// const resultArray = Array.from(Array(array.length),() => new Array(array[0].length));
// console.log('result', resultArray);





// for(let i = 0; i < input.length; i++) {

//     let array = [];
    
//     for(let j = 0; j < input[i].length; j++) {
//         array = input[i].split(' ');
//         // let maxValue = array[0];
//         // if(maxValue < Number(array[i])) {
//         //     maxValue = Number(array[i]);
//         //     // console.log('maxValue', maxValue);
//         // }
//     }
    
// }
// const resultArray = Array.from(Array(array.length),() => new Array(array[0].length));
// console.log('result', resultArray);
