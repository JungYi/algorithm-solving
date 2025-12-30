// const S = "(()(())())";
const S = "())";

console.log(solution(S));
console.log(solutionOthers(S));

function solution(S) {
    let stack = [];

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            stack.push(S[i]);
        } else if (stack.length !== 0 && S[i] === ')') {
            stack.pop();
        } else if (stack.length === 0 && S[i] === ')') {
            return 0;
        }
    }

    return stack.length === 0 ? 1 : 0;
}

function solutionOthers(S) {
    let counter = 0; // stack 대신 숫자 하나만

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            counter++; // push 대신 +1
        } else { // S[i]가 ')'인 경우
            if (counter === 0) return 0;
            counter--; // pop 대신 -1
        }
    }

    return counter === 0 ? 1 : 0;
}