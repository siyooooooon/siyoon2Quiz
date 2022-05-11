// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

for(let i = 0; i < input.length; i++) {

    let array = [];
    
    for(let j = 0; j < input[i].length; j++) {
        array = input[i].split(' ');
        let maxValue = array[0];
        if(maxValue < Number(array[i])) {
            maxValue = Number(array[i]);
            console.log('maxValue', maxValue);
        }
    }
    console.log(array);
}
