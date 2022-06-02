// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');
let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');

let starNum = input[0];

for(let i = 0; i < starNum; i++){
    let star = "";

    if(i%2 === 0){
        for(let j = 0; j < starNum * 2; j++){
            if(j%2 === 0){
                star = star + "*";
            } else {
                star = star + " ";
            }
        }
    }
    else {
        for(let j = 0; j < starNum * 2; j++){
            if(j%2 === 0){
                star = star + " ";
            } else {
                star = star + "*";
            }
        }
    }
    console.log(star);
}