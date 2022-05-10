let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split(' ').map(Number);

let idx=1;
let flag = true;
for(let i=1; i<=input[0]; ++i){
    if(input[0] % i === 0){
        if(input[1] === idx){
            console.log(i);
            flag = false;
            break;
        }else{
            ++idx;
        }
    }
}
if(flag) console.log(0);