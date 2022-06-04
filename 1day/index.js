// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);

const numN = input[0];
let array = [];

for(let i = 1; i < input.length; i++) {
    array.push(parseInt(input[i]));
}
function sorting () {
    for(let i = 0; i < array.length - 1; i++) {
        let minNum = array[i];
        for(let j = 0; j < array.length - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                minNum = array[j];
                array[j] = array[j + 1];
                array[j + 1] = minNum;
            }
        }
    }
    return array;
}
console.log(sorting());