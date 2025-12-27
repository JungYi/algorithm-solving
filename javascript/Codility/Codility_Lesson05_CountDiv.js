const A = 6, B = 11, K = 2;

console.log(solution(A, B, K));
//console.log(solutionOthers(A));

function solution(A, B, K) {
    /** O(B-A)
    let count = 0;
    for (let i = A; i <= B; i++) {
        if (i % K === 0) count++;
    }
    console.log(count);
    */
    
    /** O(B/K)
    let countA = 0;
    let countB = 0;
    const divisor = K;
    for (let i = divisor; i < A; i += divisor) countA++;
    for (let i = divisor; i <= B; i += divisor) countB++;
    console.log(countB-countA);
    */

    const remainderA = Math.floor(A / K);
    const remainderB = Math.floor(B / K);
    console.log(remainderB-remainderA + (A % K === 0 ? 1 : 0));

    let resultB = Math.floor(B / K);
    if (A === 0) return resultB + 1;
    let resultA = Math.floor((A - 1) / K);
    return resultB - resultA;
}

function solutionOthers(A, B, K) {
    // 0부터 B까지의 배수 개수 - 0부터 (A-1)까지의 배수 개수
    const aMinusOneCount = A > 0 ? Math.floor((A - 1) / K) : -1;
    const bCount = Math.floor(B / K);
    
    // A가 0인 경우 0은 모든 수의 배수(0 % K === 0)이므로 1을 포함시켜야 함
    if (A === 0) return bCount + 1;
    return bCount - aMinusOneCount;
}