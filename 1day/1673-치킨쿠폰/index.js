// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);

let array = [];
for(let i = 0; i < input.length; i++) {
    array.push(input[i].split(' '));
}

let chickenCount = 0;
let coupon = 0;
let stamp = 0;
let result = 0;
for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
        coupon = parseInt(array[i][0]);
        stamp = parseInt(array[i][1]);
        chickenCount = parseInt(array[i][0] / array[i][1]); 
        while(coupon >= stamp){
            // coupon = coupon - stamp * chickenCount;
            // result = coupon + chickenCount;
            
        }
        //console.log('result',result);
    } 
    console.log('coupon',coupon);
}

