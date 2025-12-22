// const A = [2,2,2];
const A = [4,4,4,4];
// const A = [1,2,1];
// const A = [1,1,3];

console.log(solution(A));
console.log(solutionOthers(A));


// XOR은 보통 "빠진 놈 찾기"에는 무적이지만,
// "순열(전부 다 하나씩 있니?)" 확인에는 Set이나 Checklist보다 신뢰도가 살짝 떨어집니다.
function solution(A) {
    const N = A.length;
    const resultSet = new Set();

    let result = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] > N) return 0;
        result = result ^ A[i];
    }
    for (let i = 1; i <= N; i++) {
        result = result ^ i;
    }
    console.log('result:', result);

    // Set 방식 가장 안전
    for (let i = 0; i < N; i++) {
        if (A[i] > N) return 0;
        if (resultSet.has(A[i])) return 0;
        resultSet.add(A[i]);
    }
    if (resultSet.size !== N) return 0;

    // if (result > 0) return 0;
    if (result !== 0) return 0;
    else return 1;
}

/**
 * 3. Checklist (Counting Array) 방식: "좌석표"
 * 이 방식이 사실 알고리즘의 정석입니다. Set보다 메모리 구조가 단순해서 더 빠릅니다.
 * 상황: 영화관에 1번부터 N번 좌석이 있습니다. 모든 자리에 사람이 딱 한 명씩 앉아야 합니다.
 * const checklist = new Array(N).fill(false): N개의 빈 의자를 준비. (모두 false)
 * if (checklist[A[i] - 1] === true): 중복 -> 탈락(0)
 * checklist[A[i] - 1] = true: "자리가 비었군요. 여기 앉으세요. (좌석 점유 표시)"
 * 왜 - 1을 하나요? 배열의 인덱스는 0부터 시작하고, 우리가 가진 숫자는 1부터 시작.
 * 숫자 1은 checklist[0]에, 숫자 N은 checklist[N-1]에 매칭.
 */
function solutionOthers(A) {
    const N = A.length;
    const checklist = new Array(N).fill(false); //N개의 빈 의자를 준비. (모두 false)

    for (let i = 0; i < N; i++) {
        if (A[i] > N) return 0;
        if (checklist[A[i] - 1] === true) return 0;
        checklist[A[i] - 1] = true;
    }

    return 1;
}