// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log('input',input);
const player = input[0];
input.shift();
console.log('input',input);
let count = 0;
let diceNumber = 0;
let array = [];
let priceArr = [];
console.log(player);
for(let i = 0; i < input.length; i++) {
    let array = input[i].split(' ');
    console.log('arr',array);
    for(let j = 0; j < array.length; j++) {
        console.log('i',array[i]);
        console.log('j',array[j]);
        if(array[i] ) {

        }
    }
}


// console.log('count',count);
// console.log('diceNumber',diceNumber);

// if(count === 4) {
//     console.log(50000 + diceNumber * 5000);
// } else if (count === 3) {
//     console.log(10000 + diceNumber * 1000);
// }

// for(let i = 1; i <= player; i++) {
//     let array = input[i].split(' ');
//     // console.log('array',array);
//     for(let j = 0; j < array.length; j++) {
//         // console.log(array[j]);
//         for(let k = j + 1; k < array.length; k++) {
//             if(array[j] === array[k]) {
//                 count += 1;
//                 diceNumber = input[j]
//                 console.log('count',count);
//                 console.log('j k',array[j], array[k]);
//             }
//             // console.log('j k',array[j],array[k]);
//         }
//     }
// }

