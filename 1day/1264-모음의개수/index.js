// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);
let alphabet = ['a', 'e', 'i', 'o', 'u'];
let sentence = [];
// let i = 0;
// while(i < input.length) {
//     sentence.push(input[i]);
//     console.log(sentence);
//     if(sentence === '#') {
//         break;
//     }
// }


    for(let i = 0; i < input.length -1; i++) {
        let count = 0;
        sentence.push(input[i].replace(' ', '').replace('.', '').replace(',' , '').replace('!', '').replace('?', '').split(''));
        //sentence.push(input[i].split(' ').join(''));
    
        // console.log('sentence',sentence);
        //sentence = sentence[i].replace('.', '').replace(',' , '').replace('!', '').replace('?', '');
 
        // if(sentence[i] === alphabet[j]) {
        //     count += 1;
        //     console.log('count',count);
        // }
        for(let j = 0; j < alphabet.length; j++) {
            for(let q = 0; q < sentence[i].length; q++) {
            //console.log('sentence[i]',sentence[i][q],' alphabet[j]', alphabet[j]);
            //console.log('alphabet[j]',alphabet[j]);
                if(sentence[i][q] === '#') {
                    break;
                }
                if(sentence[i][q].toLowerCase() === alphabet[j]) {
                    count += 1;
                }
            }
        }
        //console.log('sentence[i]',sentence[i]);
        //console.log('alphabet[j]',alphabet[j]);
        console.log('count',count);
    }

