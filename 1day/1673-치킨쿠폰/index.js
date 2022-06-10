// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);

/* let array = [];
for(let i = 0; i < input.length; i++) {
    array.push(input[i].split(' '));
    // console.log();
}
console.log('array', array);
let chicken = 0;
let coupon = 0;
let couponPlus = 0;
let result = 0;
for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
        // console.log('array',array[0][0]);
        // console.log('array',array[0][1]);
        // console.log('array',array[1][0]);
        // console.log('array',array[1][1]);
        // console.log('array',array[2][0]);
        // console.log('array',array[2][1]);
        coupon = parseInt(array[i][0] / array[i][1]);
        console.log('coupon = parseInt(array[i][0] / array[i][1]);',coupon = parseInt(array[i][0] / array[i][1]));
        if(array[i][1] <= coupon) {
            console.log('test');
            couponPlus = coupon / parseInt(array[i][1]);
            
        }
        //couponPlus = parseInt(array[i][0] % array[i][1])
        chicken = parseInt(array[i][0]);
        console.log('chicken = parseInt(array[i][0]);',chicken = parseInt(array[i][0]));
    }
    result = chicken + coupon + couponPlus;
    console.log(result);
}*/

let array = [];
for(let i = 0; i < input.length; i++) {
    array.push(input[i].split(' '));
}
let chicken = 0;
let coupon = 0;
let couponPlus = 0;
let result = 0;
for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
        coupon = parseInt(array[i][0] / array[i][1]);
        if(array[i][1] <= coupon) {
            couponPlus = coupon / parseInt(array[i][1]); 
        }
        /* if(parseInt(array[i][0] % array[i][1]) !== 0) {
            couponPlus += parseInt(array[i][0] % array[i][1]);
        } */
        chicken = parseInt(array[i][0]);
        //console.log('coupon+result',coupon + result);
    }
    result = chicken + coupon + couponPlus;
    console.log(result);    
}