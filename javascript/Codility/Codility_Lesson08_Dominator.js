// const A = [3,4,3,2,3,-1,3,3];
// const A = [3, 4, 3, 2, 3, 3, 1];
// const A = [100];
const A = [1,2,3];

// console.log(solution(A));
console.log(solutionOthers(A));

function solution(A) {
    const resultMap = new Map();
    const halfLength = A.length / 2;

    if (A.length === 0)
        return -1;
    else if (A.length === 1)
        return 0;
    
    for (let i = 0; i < A.length; i++) {
        if (resultMap.has(A[i])) {
            let resultArr = resultMap.get(A[i]);
            resultArr.push(i);

            // resultMap.get(A[i]).push(i);
            if (resultArr.length > halfLength) return resultArr[0];
        } else {
            resultMap.set(A[i], [i]);
        }

        // 더 가벼운 방식
        // Key: 숫자
        // Value: { count: 개수, firstIndex: 첫 인덱스 }
        if (!resultMap.has(A[i])) {
            resultMap.set(A[i], { count: 1, firstIndex: i });
        } else {
            let elementValue = resultMap.get(A[i]);
            elementValue.count++;
            if (elementValue.count > halfLength) return elementValue.firstIndex;
        }
    }

    return -1;
}

function solutionOthers(A) {
    let candidate = 0;
    let count = 0;

    // --- 1단계: 자폭 서바이벌 (후보 찾기) ---
    for (let x of A) {
        if (count === 0) {
            candidate = x;
            count = 1;
        } else if (candidate === x) {
            count++;
        } else {
            count--;
        }
        console.log(`x: ${x}, candidate: ${candidate}, count: ${count}`);
    }

    // --- 2단계: 확인 사살 (진짜 리더인지 검증) ---
    let leaderCount = 0;
    let lastIndex = -1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === candidate) {
            leaderCount++;
            lastIndex = i;
        }
        console.log(`A[${i}]: ${A[i]}, candidate: ${candidate}, leaderCount: ${leaderCount}`);
    }

    // 과반수(절반 초과)인지 확인
    if (leaderCount > A.length / 2) {
        return lastIndex;
    } else {
        return -1;
    }
}