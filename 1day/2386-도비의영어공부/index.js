// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

//console.log(input);

let i = 0;

while(i < input.length) {
    let count = 0;
    if(input[i] == '#') {
        break;
    }
    //console.log(input[i]);
    let sentence = input[i].trim().split('');
    let alphabet = sentence[0];
    //console.log(alphabet);
    sentence.shift();
    //sentence[0].split(' ').join();
    
    //console.log(sentence);

    // while(i < sentence.length) {
    //     console.log(sentence[i]);
    //     if(alphabet == sentence[i] || alphabet.toUpperCase() == sentence[i]) {
    //         count += 1;
    //     }
    //     console.log(`${alphabet} ${count}`);
    //     i++
    // }
    let j = 0;
    while( j < sentence.length) {
        if(alphabet == sentence[j].toLowerCase() || alphabet == sentence[j].toLowerCase()) {
            count += 1;
        }
        j++
    }
    console.log(`${alphabet} ${count}`);
    i++
}

// 명수
// console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse().slice(1).reverse().map(i=>i.toLowerCase().split('')).map(i=>i.map(j=>[i[0],i[0]===j?1:0]).reduce((j,k)=>[j[0],j[1]+k[1]])).map(i=>[i[0],i[1]-1].join(' ')).join('\n'))
// console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse().slice(1).reverse().map(i=>i!=='#'?i.toLowerCase().split(''):[]).map(i=>i.map(j=>[i[0],i[0]===j?1:0]).reduce((j,k)=>[j[0],j[1]+k[1]])).map(i=>[i[0],i[1]-1].join(' ')).join('\n'))