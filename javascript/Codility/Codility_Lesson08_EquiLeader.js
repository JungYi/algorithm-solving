const A = [4,3,4,4,4,2];
// const A = [4,4];
// const A = [4, 4, 2, 2, 2, 4, 4];

console.log(solution(A));
console.log(solutionOthers(A));
console.log(solutionOthers2(A));

function solution(A) {
    const leaderMap = new Map();
    let totalLeaderNumber = null;

    if (A.length === 0 || A.length === 1) return 0;

    for (let i = 0; i < A.length; i++) {
        if (leaderMap.has(A[i])) {
            const elementCount = leaderMap.get(A[i]);
            leaderMap.set(A[i], elementCount + 1);

            if (elementCount+1 > A.length / 2)
                totalLeaderNumber = A[i];
            // leaderMap.set(A[i], leaderMap.get(A[i]) + 1);
        } else {
            leaderMap.set(A[i], 1);
        }
    }

    if (totalLeaderNumber === null) return 0;

    let leftLeaderCount = 0;
    let equiLeaders = 0;

    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] === totalLeaderNumber)
            leftLeaderCount++;

        let rightLeaderCount = leaderMap.get(totalLeaderNumber) - leftLeaderCount;

        if ((leftLeaderCount > (i+1) / 2) && (rightLeaderCount > (A.length-1-i) / 2))
            equiLeaders++;

        console.log(`i: ${i}, leftLeaderCount: ${leftLeaderCount}, rightLeaderCount: ${rightLeaderCount}, equiLeaders: ${equiLeaders}`);
    }

    return equiLeaders;
}

function solutionOthers(A) {
    let leaderMap = new Map();
    for (let x of A)
        leaderMap.set(x, (leaderMap.get(x) || 0) + 1);

    let leaderValue = 0;
    let totalLeaderCount = 0;
    for (let [key, value] of leaderMap) {
        if (value > A.length / 2) {
            leaderValue = key;
            totalLeaderCount = value;
            break; 
        }
    }
    
    if (totalLeaderCount === 0) return 0;

    let equiLeaders = 0;
    let leftLeaderCount = 0;

    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] === leaderValue)
            leftLeaderCount++;

        let rightLeaderCount = totalLeaderCount - leftLeaderCount;

        if (leftLeaderCount > (i+1) / 2 && rightLeaderCount > (A.length-i-1) / 2)
            equiLeaders++;
    }

    return equiLeaders;
}

// Boyer-Moore Voting Algorithm
function solutionOthers2(A) {
    const N = A.length;
    if (N <= 1) return 0;

    // --- 1단계: 전체 리더 후보 찾기 ---
    let candidate = 0;
    let count = 0;
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

    // --- 2단계: 후보가 진짜 리더인지, 총 몇 개인지 계산 ---
    let totalLeaderCount = 0;
    for (let x of A) {
        if (x === candidate) totalLeaderCount++;
    }
    console.log(`candidate: ${candidate}, totalLeaderCount: ${totalLeaderCount}`);

    // 과반수 체크: 리더가 없으면 에퀴리더도 절대 불가능
    if (totalLeaderCount <= N / 2) return 0;
    
    const leaderValue = candidate;

    // --- 3단계: 슬라이딩 윈도우 (에퀴리더 지점 찾기) ---
    let equiLeaders = 0;
    let leftLeaderCount = 0;

    for (let i = 0; i < N - 1; i++) {
        if (A[i] === leaderValue) {
            leftLeaderCount++;
        }

        let rightLeaderCount = totalLeaderCount - leftLeaderCount;
        let leftLen = i + 1;
        let rightLen = N - (i + 1);
        
        if (leftLeaderCount > leftLen / 2 && rightLeaderCount > rightLen / 2) {
            equiLeaders++;
        }
    }

    return equiLeaders;
}