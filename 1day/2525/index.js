// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
let input = fs.readFileSync('./1day/test.txt').toString().trim().split('\n');

const time = input[0].split(' ');
const hour = parseInt(time[0]); // 입력 받은 시간
const minute = parseInt(time[1]); // 입력 받은 분
let takeTime = parseInt(input[1]); // 입력 받은 소요 시간
let endHour = 0;
let resultHour = 0;
let resultMinute = 0;

resultMinute = minute + takeTime;
endHour = parseInt(resultMinute / 60);
resultMinute = parseInt(resultMinute % 60);
resultHour = hour + endHour;
if(parseInt(resultHour) >= 24) {
    resultHour = 0;
    //console.log(`${resultHour} ${resultMinute}`);
}
console.log(`${resultHour} ${resultMinute}`);
