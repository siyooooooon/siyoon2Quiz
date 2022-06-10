// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('');

console.log(input);

const array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let result = [];

for(let i = 97; i <= 122; i++) {
    answer.push(-1);
}
for(let i = 0; i < input.length; i++) {
	for(let j = 0; j < array.length; j++) {
		if(input[i] === array[j]) {
            result[j] = input.indexOf(input[j]);
            //array.splice(i, 1, j);
            //console.log(j);
            // result.push(j);
            //break;
		}
	}
 
    //console.log(array[i]);
    //result.push(i, 0, -1);
    //array.splice(i, 0, -1);
    //result = array.join('');
}
   console.log(result.join(' ').trim());
// console.log('result', result);
// console.log('array', array);
//