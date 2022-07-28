// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('./1day/test.txt').toString().trim().split('\n');

//console.log(input);

let i = 0;
let fbiWord = 'FBI';
let array = [];
input.forEach((value) => {
    array.push(value.indexOf(fbiWord));
});
//console.log(array);
let result = [];
function find(arr) {
    arr.forEach((value, index) => {
        if(parseInt(value) > -1) {
            // console.log(index + 1);
            result.push(index + 1);
        }
    });
    if(result == 0) {
        console.log('HE GOT AWAY!');
    } else {
        console.log(result.join(' '));
    }
}
find(array);
// console.log(result);

// 아라
// let resultStr = '';
// for (let i = 0; i < input.length; i++) {
//     if (input[i].includes('FBI')) {
//         resultStr += `${i + 1} `;
//     }
// }

// if (resultStr === '') resultStr = 'HE GOT AWAY!';

// console.log(resultStr);

// 명수
// let res = [];
// for(let i=1; i<=5; ++i){
//     if(input[i-1].includes('FBI')) res.push(i);
// }

// console.log(res.length ? res.join(" ") : "HE GOT AWAY!");