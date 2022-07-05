// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');
let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');

console.log(input);
let count = 0;
let diceNumber = 0;
for(let i = 0; i < input.length; i++) {
    for(let j = i + 1; j < input.length; j++) {
        if(input[i] === input[j]) {
            count += 1;
            diceNumber = input[i];
        }
    }
}
if(count === 3) {
    console.log(10000 + diceNumber * 1000);
} else if(count === 1) {
    console.log(1000 + diceNumber * 100);
} else {
    console.log(Math.max(...input) * 100);
}