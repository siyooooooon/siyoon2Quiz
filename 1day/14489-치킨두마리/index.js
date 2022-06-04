// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

const money = input[0].split(' ');
let allMoney = parseInt(money[0]) + parseInt(money[1]);
const chickenPrice = parseInt(input[1]);
let change = 0;

if(chickenPrice * 2 <= allMoney) {
    change = parseInt(allMoney - chickenPrice * 2);
    console.log(change);
} else {
    console.log(allMoney);
}

// console.log('input-0',input[0]);
// console.log('input-1',input[1]);
// console.log('money',money);
// console.log('allMoney',allMoney);
// console.log('chickenPrice', chickenPrice);
// console.log('change',change);