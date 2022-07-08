// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log('input',input);
let plus = 0;
let average = 0;
//let number = 0;
for(let i = 0; i < input.length; i++) {
    plus += parseInt(input[i]);
    average = plus / input.length;
}
// const result = input.reduce((k,v) => {
//     k.set(v, (k.get(v) || 0) + 1);
//     return k;
// },new Map());

// let maxArray = [];
// let maxNum = 0;
// for(let [key, value] of result.entries()) {
//     console.log(key + ':' + value);
//     maxArray.push(value);
//     console.log('m',maxArray);
// }
// maxNum = Math.max(...maxArray);
//     console.log('Num',maxNum);  
//     if(maxNum === value) {
//         console.log('key',key);
//     }

function getCount(array){
   // 빈도 수 구하기
    const counts = array.reduce((acc, cur)=>{
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

   // 빈도 수 큰 숫자 찾기
    const keys = Object.keys(counts);
    let mode = keys[0];
    keys.forEach((val, idx)=>{
        if(counts[val] > counts[mode]){
            mode = val;
        }
    });

    return mode;
}
console.log(average);
console.log(getCount(input));

//console.log('number', number);
//Math.max(parseInt(value)
//console.log('average',average);
//console.log('number',number);




// 아라
// // 평균
// function average(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum += parseInt(value);
//     });

//     return sum / arr.length;
// }

// // 최빈값
// function moreNum(arr) {
//     const countObj = {};
//     arr.forEach((value) => {
//         if (!countObj.hasOwnProperty(value)) {
//             countObj[value] = 1;
//         } else {
//             countObj[value]++;
//         }
//     });

//     let bigKey = '';
//     let bigVal = 0;
//     for (const key in countObj) {
//         if (countObj[key] > bigVal) {
//             bigKey = key;
//             bigVal = countObj[key];
//         }
//     }

//     return bigKey;
// }

// console.log(average(input));
// console.log(moreNum(input));