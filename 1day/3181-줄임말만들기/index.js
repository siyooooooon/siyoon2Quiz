// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('');

console.log('input',input);
const removal = ['i', 'pa', 'te', 'ni', 'niti', 'a', 'ali', 'nego', 'no', 'ili'];
let result = [];
let count = 0;

//console.log(input.trim().split(''));

for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < removal.length; j++) {
        //let value = input[i];
        if(input[i] !== input[i].replace(removal[j], '')) {
            input[i].replace(removal[j], ' ');
            count += 1;
            console.log('input',input[i]);
            //console.log('input-',input[i] !== input[i].replace(removal[j], ''));
            //console.log('value',value);
        }
        //console.log('input',input[i]);
        //console.log('i',input[i]);
        //console.log('j',removal[j]);
       // console.log('count',count);
    }
    console.log('input',input[i]);
}
//console.log('input',input);
console.log('result',result);