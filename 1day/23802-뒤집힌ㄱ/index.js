// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split(' ');

console.log(input);

let num = parseInt(input[0]);

for(let i = 1; i <= num * 5; i++) {
    let V = '';
    if(i <= num) {
        for(let j = 1; j <= num * 5; j++) {
            V = V + '@';
        }
    } else {
        for(let j = 1; j <= num * 5; j++) {
            if(j > num) {
                V = V + '';
            } else {
                V = V + '@';
            }
        }
    }
    console.log(V);
}
