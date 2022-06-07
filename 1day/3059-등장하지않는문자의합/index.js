// file system import
let fs = require('fs');
const { workerData } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);

const alphabet = ['A','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const ASCII = ['65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90'];
const testCase = input[0];
let inputAlphabet = [];
for(let i = 1; i <= testCase; i++) {
    inputAlphabet.push(input[i]);
}
console.log('inputAlphabet',inputAlphabet);
let array = [];
for(let i = 0; i < inputAlphabet.length; i++) {
    /* let array = inputAlphabet[i].trim().split('');
    console.log('array',array); */
    array.push(inputAlphabet[i].trim().split(''));
}
console.log('array',array[0]);
let index = [];
for(let i = 0; i < alphabet.length; i++) {
    if(array[0][i] !== alphabet[i]) {
        index.push(i);
    }
}
console.log('index',index);