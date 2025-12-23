// const A = [4, 3, 2, 1, 5];
// const B = [0, 1, 0, 0, 0];
// const A = [101, 2, 3, 5, 100];
// const B = [1, 1, 1, 1, 0];
const A = [2,10];
const B = [1,1];

console.log(solution(A, B));
//console.log(solutionOthers(A));

function solution(A, B) {
    let stack = [];
    let fish = 0;
    
    for (let i = 0; i < A.length; i++) {
        if (B[i] === 1) {
            stack.push(A[i]);
        }
        else {
            while (stack.length !== 0 && B[i] === 0) {
                if (stack[stack.length - 1] < A[i]) {
                    stack.pop();
                } else {
                    break;
                }
            }
        }
        
        if (stack.length === 0) {
            fish++;
        }
        console.log('i:'+i+', stack:'+stack);
    }
    console.log(stack);
    
    return fish + stack.length;
}