const A=[1,2,3,4,1,1,3], K=4;

console.log(solution(K, A));

function solution(K, A) {
    let count = 0;
    let ropeLength = 0;

    for (let i = 0; i < A.length; i++) {
        ropeLength += A[i];
        if (ropeLength >= K) {
            count++;
            ropeLength = 0;
        }
    }
    return count;
}