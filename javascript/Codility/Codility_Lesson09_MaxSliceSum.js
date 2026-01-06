// const A = [3,2,-6,4,0];
// const A = [5,10,-13,1];
// const A = [5,10,-13,16];
// const A = [5,10,-16];
const A = [5,10,-20,15];
// const A = [-5,-10,-20,-15];

console.log(solution(A));
// console.log(solutionOthers(A));

function solution(A) {
    let currentSum = A[0];
    let max = A[0];

    if (A.length === 1) return currentSum;

    // "이전까지의 합 + 나" vs "그냥 나"
    for (let i = 1; i < A.length; i++) {
        // currentSum += A[i];
        // if (currentSum < A[i]) currentSum = A[i];

        // currentSum = Math.max(currentSum + A[i], A[i]);
        currentSum = currentSum + A[i] > A[i] ? currentSum + A[i] : A[i];

        max = currentSum > max ? currentSum : max;

        console.log(`i: ${i}, A[i]: ${A[i]}, currentSum: ${currentSum}, max: ${max}`);
    }
    
    return max;
}