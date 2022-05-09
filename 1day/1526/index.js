// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('');

let numN = input.join('');
let array = [];

for(let i = 0; i <= numN; i++) {
    // let array = [];
    // // for(let word = 0; word <= numN.length; word++) {
    // //     console.log('word',word);
    // //     // array = 
    // // }
    // // array.push(input[i]);
    // array = input[i].split('');
    // console.log('array',array);
    if(i == 4) {
        array.push(i);
    } else if(i == 7) {
        array.push(i);
    }

}

console.log('input', input);
console.log('numN', numN);
console.log('array', array);

// 은민이는 4와 7을 좋아하고, 나머지 숫자는 싫어한다. 금민수는 어떤 수가 4와 7로만 이루어진 수를 말한다.
// N이 주어졌을 때, N보다 작거나 같은 금민수 중 가장 큰 것을 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N이 주어진다. N은 4보다 크거나 같고 1,000,000보다 작거나 같은 자연수이다.

// 출력
// 첫째 줄에 N보다 작거나 같은 금민수 중 가장 큰 것을 출력한다.