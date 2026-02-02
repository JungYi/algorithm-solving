// const A = [1,4,-3];
// const A = [-10, 1, 2, 8];
const A = [-8, 4, 5, -10, 3];

console.log(solution(A));

function solution(A) {
    A.sort((a, b) => a - b);

    let left = 0;
    let right = A.length - 1;
    let result = Math.abs(A[left] + A[right]);

    while (left <= right) {
        // 현재 A[left] + A[right]를 한 루프 안에서 세 번이나 계산하고 있어요. 변수 하나에 담아두면 컴퓨터가 조금 더 편안해합니다.
        /**
        console.log(`${A[left] + A[right]}`);
        result = Math.min(result, Math.abs(A[left] + A[right]));

        if ((A[left] + A[right]) === 0) return 0;
        else if ((A[left] + A[right]) > 0) right--;
        else left++;
        */

        const currentSum = A[left] + A[right];
        result = Math.min(result, Math.abs(currentSum));

        if (currentSum === 0) return 0;
        else if (currentSum > 0) right--;
        else left++;
    }
    return result;
}