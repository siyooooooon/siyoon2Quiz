// file system import
let fs = require('fs');
const { workerData, resourceLimits } = require('worker_threads');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

console.log(input);
let game = [];

for(let i = 0; i < input.length; i++) {
    game.push(input[i].trim().split(' '));    
}


for(let j = 0; j < game.length; j++) {

    let countA = 0;
    let countB = 0;
    
    for(let k = 0; k < game[j].length; k++) {

        if(game[j][k] == 0) {
            countA += 1;
        } else if(game[j][k] == 1) {
            countB += 1;
        }
    }
    if(countA == 4) {
        console.log('D');
    } else if(countB == 4) {
        console.log('E');
    } else if(countA == 3) {
        console.log('C');
    } else if(countA == 2 && countB == 2) {
        console.log('B');
    } else {
        console.log('A');
    }
}
