// file system import
let fs = require('fs');
// file system 을 이용한 전체 입력 받기
//let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');
let input = fs.readFileSync('./1day/test.txt').toString().trim().split(' ');

// 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 

// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
// 예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다.
// 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다.
// 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

// 3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.
for(let d1=1; d1<=6; ++d1){
    for(let d2=1;d2<=6; ++d2){
        for(let d3=1; d3<=6; ++d3){
            let dice1 = d1;
            let dice2 = d2;
            let dice3 = d3;
            let diceNum = 0; // 같은 주사위 수
            let diceValue = 0 // 같은 주사위 값
            let diceMax = input[0]; // 주사위 최대 값
            for(let i = 0; i < input.length; i++) {
                if(input[0] === input[i]){
                    diceNum += 1;
                    console.log('for문 diceNum',diceNum);
                    if(diceNum === 2 && diceNum !== 3) {
                        diceValue = input[i];
                    }
                } else {
                    diceNum = 0;
                }
            }

            let result = 0;
            if(diceNum === 3) {
                result = 10000 + diceValue * 1000;
            }
            if(diceNum === 2) {
                result = 1000 + diceValue * 100;
            }
            if(diceNum === 0) {
                for(let i = 0; i < input.length; i++) {
                    if(diceMax < input[i]) {
                        diceMax = input[i]
                    }
                }
                result = diceMax * 100;
            }
            console.log(d1,d2,d3)
            console.log('diceNum',diceNum);
            console.log('diceValue',diceValue);
            console.log('result',Number(result));
        }
    }
}



// let dice1 = input[0];
// let dice2 = input[1];
// let dice3 = input[2];
// let diceNum = 0; // 같은 주사위 수
// let diceValue = 0 // 같은 주사위 값
// let diceMax = input[0]; // 주사위 최대 값
// for(let i = 0; i < input.length; i++) {
//     if(input[0] === input[i]){
//         diceNum += 1;
//         if(diceNum === 2 && diceNum !== 3) {
//             diceValue = input[i];
//         }
//     } else if(input[0] != input[i]) {
//         diceNum = 0;
//     }
// }

// let result = 0;
// if(diceNum === 3) {
//     result = 10000 + diceValue * 1000;
// }
// if(diceNum === 2) {
//     result = 1000 + diceValue * 100;
// }
// if(diceNum === 0) {
//     for(let i = 0; i < input.length; i++) {
//         if(diceMax < input[i]) {
//             diceMax = input[i]
//         }
//     }
//     result = diceMax * 100;
// }
// console.log('diceNum',diceNum);
// console.log('diceValue',diceValue);
// console.log('result',Number(result));