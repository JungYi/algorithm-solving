// const X = 10; const Y = 85; const D = 30;
// const X = 10; const Y = 10; const D = 30;
// const X = 10; const Y = 40; const D = 30;
const X = 10; const Y = 41; const D = 30;

console.log(solution(X, Y, D));
console.log(solutionOthers(X, Y, D));

function solution(X, Y, D) {
    const answer = Math.ceil((Y - X) / D);

    return answer;
}

function solutionOthers(X, Y, D) {
    const distance = Y - X;
    const jumps = Math.floor(distance / D);
    
    if (distance % D === 0) {
        return jumps;
    } else {
        return jumps + 1;
    }
}