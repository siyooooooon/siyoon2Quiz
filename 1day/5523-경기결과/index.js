// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log('input',input);

const testCase = input[0];
let winnerA = 0;
let winnerB = 0;

for(let i = 1; i <= testCase; i++) {
    // console.log(input[i]);
    let array = input[i].split(' ');
    // console.log(array);
    if(parseInt(array[0]) > parseInt(array[1])) {
        winnerA += 1;
        // console.log('A array 0 1',array[0], array[1]);
        // console.log('a count', winnerA);
    }
    else if (parseInt(array[0]) < parseInt(array[1])) {
        winnerB += 1;
        // console.log('B array 0 1',array[0], array[1]);
        // console.log('B count', winnerB);
    }
    else if(parseInt(array[0]) === parseInt(array[1])) {
        winnerA += 0;
        winnerB += 0;
    }
}
console.log('A B',winnerA, winnerB);




// 아라
// input.shift();

// let aCount = 0;
// let bCount = 0;

// input.forEach((value) => {
//     result(value);
// });

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

// console.log(`${aCount} ${bCount}`);