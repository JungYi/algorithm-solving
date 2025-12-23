// const S = "{[()()]}";
// const S = "([)()";
const S = "}}}";

console.log(solution(S));
console.log(solutionOthers(S));

function solution(S) {
    if (S.length === 0) return 1;

    let stack = [];
    for (let i = 0; i < S.length; i++) {
        if (stack.length === 0 || S[i] === '{' || S[i] === '[' || S[i] === '(') {
            stack.push(S[i]);
        }
        else {
            if (stack[stack.length - 1] === '{' && S[i] === '}' ||
            stack[stack.length - 1] === '[' && S[i] === ']' ||
            stack[stack.length - 1] === '(' && S[i] === ')') stack.pop();
            else return 0;
        }
    }
    console.log(S);
    console.log(stack);

    if (stack.length === 0) return 1;
    else return 0;
    // return stack.length === 0 ? 1 : 0;
}

function solutionOthers(S) {
    const stack = [];
    // 짝꿍 정보를 미리 저장 (Key: 닫는 괄호, Value: 여는 괄호)
    const pairs = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    for (let char of S) {
        if (char === '{' || char === '[' || char === '(')
            stack.push(char);
        else {
            // 스택에서 마지막 놈을 꺼내서 내 짝꿍인지 확인
            // 만약 스택이 비어있으면 pop()은 undefined를 뱉으므로 pairs[char]와 절대 안 맞음 (자동 예외처리)
            if (stack.pop() !== pairs[char]) return 0;
        }
    }

    return stack.length === 0 ? 1 : 0;
}