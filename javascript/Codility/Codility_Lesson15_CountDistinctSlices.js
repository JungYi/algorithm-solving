// const A = [3,4,5,5,2], M=6;
const A = [3,4,5,6,7,3,5], M=7;
// const A = [1, 2, 3, 2, 1], M=4;

console.log(solution(M, A));
console.log(solutionOthers(M, A));

function solution(M, A) {
    if (A.length === 1) return 1;

    const lastSeenIndex = new Array(M+1).fill(-1);

    let disSlices = 0;
    let left = 0;
    let right = 0;
    
    for (let i = 0; i < A.length; i++) {
        if (lastSeenIndex[A[i]] !== -1) { // 본 적 있다면
            // 이렇게 하면 역주행 가능. false
            // left = lastSeenIndex[A[i]] + 1;
            left = Math.max(left, lastSeenIndex[A[i]] + 1);
        }
        lastSeenIndex[A[i]] = i;
        disSlices += right - left + 1;

        console.log(`lastSeenIndex: (${lastSeenIndex})`);
        console.log(`left: ${left}, right: ${right}, right - left + 1: ${right - left + 1}`);
        console.log(`-->disSlices: ${disSlices}`);

        right++;

        if (disSlices > 1000000000) return 1000000000;
    }
    return disSlices
}

function solutionOthers(M, A) {
    let disSlices = 0;
    let left = 0;
    const seen = new Array(M + 1).fill(false);

    for (let right = 0; right < A.length; right++) {
        // 1. 머리가 가려는 곳이 이미 먹은 숫자라면,
        while (seen[A[right]]) {
            // 2. 중복이 없어질 때까지 꼬리를 당기며 소화시킨다
            seen[A[left]] = false;
            left++;
        }

        // 3. 이제 중복이 없으니 머리를 한 칸 늘리고 체크!
        seen[A[right]] = true;

        // 4. [핵심] 현재 애벌레의 길이만큼 새로운 슬라이스 개수 추가!
        disSlices += (right - left + 1);
        
        if (disSlices > 1_000_000_000) return 1_000_000_000;
    }

    return disSlices;
}