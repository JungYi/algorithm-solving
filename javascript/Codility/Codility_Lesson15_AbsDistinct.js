const A = [-5,-3,-1,0,3,6];

console.log(solution(A));
console.log(solutionOthers(A));

function solution(A) {
    const absSet = new Set();

    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) absSet.add(A[i]*(-1));
        else absSet.add(A[i]);
    }

    for (let x of A) {
        absSet.add(Math.abs(x));
    }

    return absSet.size;
}

// 공간 복잡도: O(1)
function solutionOthers(A) {
    let count = 0;
    let left = 0;
    let right = A.length - 1;
    let lastValue = null; // 마지막으로 센 값을 기억

    while (left <= right) {
        let leftVal = Math.abs(A[left]);
        let rightVal = Math.abs(A[right]);

        // 1. 둘 중 더 큰 놈을 선택
        let currentMax = Math.max(leftVal, rightVal);

        // 2. 이전에 셌던 값이 아니면 카운트 증가
        if (currentMax !== lastValue) {
            count++;
            lastValue = currentMax;
        }

        // 3. 큰 쪽의 포인터를 이동
        if (leftVal >= rightVal) left++;
        else right--;
    }
    return count;
}