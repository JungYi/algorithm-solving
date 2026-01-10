// const A = [1,5,3,4,3,4,1,2,3,4,6,2]; // N = 12
const A = [1, 5, 2, 7, 3, 8, 2, 4, 10, 3, 5, 2, 8, 4, 7, 12, 5, 9, 3, 1]; // N = 20
// const A = [1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1]; // N = 37

// console.log(`solution(A): ${solution(A)}`);
// console.log(`solutionOthers(A): ${solutionOthers(A)}`);
console.log(`solutionOthers2(A): ${solutionOthers2(A)}`);

function solutionOthers(A) {
    if (A.length < 3) return 0;

    let peaks = [];
    for (let i = 1; i < A.length - 1; i++) 
        if (A[i-1] < A[i] && A[i] > A[i+1]) peaks.push(i);
    
    if (peaks.length < 2) return peaks.length;

    let maxFlags = 0;
    for (let k = 1; k <= Math.sqrt(A.length)+1; k++) {
        let usedFlags = 1; // 첫 번째 Peak엔 무조건 하나 꽂고 시작
        let lastFlaggedPeak = peaks[0];

        console.log(`\nTrying to place ${k} flags:`);
        console.log(`(peaks: ${peaks})`);

        // 루프 돌기 전에 이미 k개를 다 꽂았는지 확인!
        if (usedFlags < k) {
            for (let idx = 1; idx < peaks.length; idx++) {
                if (peaks[idx] - lastFlaggedPeak >= k) {
                    console.log(`++index[${idx}] peaks[idx]-lastFlaggedPeak: ${peaks[idx]}-${lastFlaggedPeak} (enough!)`);
                    usedFlags++;
                    lastFlaggedPeak = peaks[idx];
                    
                    console.log(`  Placed flag at peaks[${idx}]=${peaks[idx]}, usedFlags: ${usedFlags}`);
                    if (usedFlags === k) break;
                }
                else console.log(`--index[${idx}] peaks[idx]-lastFlaggedPeak: ${peaks[idx]}-${lastFlaggedPeak} (not enough distance)`);
            }
        }

        if (usedFlags >= k) maxFlags = k;
        else break;
    }

    return maxFlags;
}

function solutionOthers2(A) {
    const N = A.length;
    if (N < 3) return 0;

    // 1. nextPeak 배열 만들기 (뒤에서부터 채우기)
    // nextPeak[i] = i 인덱스 포함, 그 이후에 나타나는 가장 가까운 peak의 인덱스
    const nextPeak = new Array(N).fill(-1);
    let lastFoundPeak = -1;
    let peaksCount = 0;

    for (let i = N-2; i > 0; i--) {
        if (A[i] > A[i-1] && A[i] > A[i+1]) {
            lastFoundPeak = i;
            peaksCount++;
        }
        nextPeak[i] = lastFoundPeak;
    }
    // 인덱스 0과 N-1은 peak가 될 수 없으므로 보정
    nextPeak[0] = nextPeak[1];

    if (peaksCount < 2) return peaksCount;
    console.log(`(nextPeak array: ${nextPeak}), peaksCount: ${peaksCount}`);

    // 2. K를 늘려가며 확인 (루트 N까지만)
    let maxFlags = 0;
    for (let k = 1; (k - 1) * k <= N; k++) {
        console.log(`\nTrying to place ${k} flags:`);
        console.log(`(nextPeak: ${nextPeak})`);

        let usedFlags = 0;
        let currentPos = 0;

        /**
         * 기존 방식 (Peak 리스트 순회):
         * -> for (let idx = 1; idx < peaks.length; idx++)
         * 봉우리가 M개라면, 매번 M번을 다 훑어야 합니다. 봉우리가 빽빽하게 1, 3, 5, 7... 이렇게 있다면 깃발을 꽂든 안 꽂든 모든 봉우리를 다 확인하죠.
         * -> 공간: peaks 배열만 필요 (O(Peak 개수))
         * 
         * 최적화 방식 (nextPeak 워프):
         * -> while (currentPos < N && flagsUsed < k)
         * 이 루프는 깃발을 꽂을 때만 돌아갑니다. 깃발을 K개 꽂는다면 딱 K번만 루프를 돕니다. 중간에 있는 수만 개의 봉우리는 nextPeak[currentPos] 한 번으로 순간 이동해서 건너뛰니까요.
         * -> 공간: nextPeak 배열 필요 (O(N))
        */
        while (currentPos < N && usedFlags < k) {
            console.log(`  Trying to place flag #${usedFlags + 1} from position ${currentPos}`);
            currentPos = nextPeak[currentPos]; // 현재 위치에서 가장 가까운 다음 봉우리 찾기
            console.log(`  Current Position=nextPeak[currentPos]: ${currentPos}`);

            if (currentPos === -1) break; // 더 이상 봉우리가 없음

            usedFlags++; // 봉우리를 찾았으니 깃발 꽂기
            currentPos += k; // 다음 깃발은 최소 K 거리 뒤에 꽂아야 하므로 위치 강제 이동!

            console.log(`++Placed flag #${usedFlags} at position ${currentPos - k}`);
        }

        if (usedFlags >= k) maxFlags = k;
        else break;
    }

    return maxFlags;
}