const H = [8,8,5,7,9,8,7,4,8];

// console.log(solution(H));
console.log(solutionOthers(H));

function solution(H) {
    let stack = [];
    let wallCount = 0;
    let wallHeight = 0;

    for (let i = 0; i < H.length; i++) {
        while (wallHeight > H[i]) {
            let topValue = stack.pop();
            wallHeight -= topValue;
            console.log('  poped topValue: '+topValue+', new wallHeight: '+wallHeight);
        }

        if (stack.length === 0) {
            stack.push(H[i]);
            wallCount++;
            wallHeight = H[i];
        } else if (wallHeight < H[i]) {
            stack.push(H[i]-wallHeight);
            wallCount++;
            wallHeight = H[i];
        }

        console.log('i: '+i+', H[i]: '+H[i]+', stack: '+stack+', wallHeight: '+wallHeight+', wallCount: '+wallCount);
    }

    return wallCount;
}

function solutionOthers(H) {
    let stack = [];
    let count = 0;

    // Stack에 차이값이 아니라 "현재 살아남은 블록들의 절대 높이"를 담아서 간단하게.
    for (let i = 0; i < H.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
            stack.pop();
        }

        if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
            stack.push(H[i]);
            count++;
        }
        console.log('i: '+i+', H[i]: '+H[i]+', stack: '+stack+', count: '+count);
    }

    return count;
}