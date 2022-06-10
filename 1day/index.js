// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('');

console.log('input',input);
const removal = ['i', 'pa', 'te', 'ni', 'niti', 'a', 'ali', 'nego', 'no', 'ili'];
let result = [];
//console.log(input.trim().split(''));
for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < removal.length; j++) {
        if(input[i] === removal[j] && i !== 0) {
            input.splice(i,1);
        }
        //console.log('i',input[i]);
        //console.log('j',removal[j]);
    }
}
console.log('input',input);
console.log('result',result);