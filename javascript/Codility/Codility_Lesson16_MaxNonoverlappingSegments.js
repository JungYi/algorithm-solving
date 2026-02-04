const A=[1,3,7,9,9], B=[5,6,8,9,10];

console.log(solution(A, B));
//console.log(solutionOthers(A));

function solution(A, B) {
    if (A.length === 0) return 0;

    let count = 1;
    let lastEnd = B[0];

    for (let i = 0; i < A.length - 1; i++) {
        // if (B[i] < A[i+1]) count++; // const A = [1, 2, 9], B = [5, 10, 11];
        if (lastEnd < A[i+1]) {
            count++;
            lastEnd = B[i+1];
        }
    }
    return count;
}