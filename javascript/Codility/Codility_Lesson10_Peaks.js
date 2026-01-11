// const A = [1,2,3,4,3,4,1,2,3,4,6,2]; // N = 12
const A = [1, 5, 2, 7, 3, 8, 2, 4, 10, 3, 5, 2, 8, 4, 7, 12, 5, 9, 3, 1]; // N = 20
// const A = [1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 1, 5, 1]; // N = 37

console.log(`solution(A): ${solution(A)}`);
console.log(`solutionOthers(A): ${solutionOthers(A)}`);
console.log(`solutionOthers2(A): ${solutionOthers2(A)}`);

function solution(A) {
    const N = A.length;
    if (N < 3) return 0;

    let peaks = [];
    for (let i = 1; i < N - 1; i++) 
        if (A[i-1] < A[i] && A[i] > A[i+1]) peaks.push(i);
    console.log(`peaks: ${peaks}`);

    let factors = [];
    // for (let i = 1; i <= peaks.length; i++)
    //     if (N % i === 0) factors.push(i);
    for (let i = peaks.length; i >= 1; i--)
        if (N % i === 0) factors.push(i);
    console.log(factors);
    
    for (let i = 0; i < factors.length; i++) {
        console.log(`--Try ${factors[i]} flags:`);
        let foundBlocks = 0;
        const flagRange = N / factors[i];
        console.log(`flagRange: ${flagRange}`);

        // peaks 배열 전부 검사 될때까지. 안되면 중간에 나옴.
        // 이번 Peak가 내가 찾던 다음 블록의 것인가?
        for (let j = 0; j < peaks.length; j++) {
            const peakPos = peaks[j];
            const currentBlockStart = flagRange * foundBlocks;
            const currentBlockEnd = flagRange * (foundBlocks + 1);

            console.log(`  currentBlock: [${currentBlockStart}, ${currentBlockEnd}] , peakPos: ${peakPos}`);

            if (currentBlockStart <= peakPos && peakPos < currentBlockEnd) {
                foundBlocks++;
                console.log(`  ! Found peak at position ${peakPos} for block ${foundBlocks}/${factors[i]}`);
            }

            if (foundBlocks === factors[i]) {
                console.log(`All blocks found for ${factors[i]} flags!`);
                // break;
                return factors[i];
            }
        }
    }
    
    return 0;
}

function solutionOthers(A) {
    const N = A.length;
    if (N < 3) return 0;

    // 1. Peak 찾기 및 누적 합(Prefix Sum) 배열 생성
    // prefixSum[i] = 0부터 i 인덱스까지 존재하는 Peak의 총 개수
    const prefixSum = new Array(N).fill(0);
    let peaksCount = 0;
    
    for (let i = 1; i < N - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaksCount++;
        }
        prefixSum[i] = peaksCount;
    }
    // 마지막 인덱스 처리 (N-1은 Peak가 될 수 없으므로 이전 값 복사)
    prefixSum[N - 1] = peaksCount;

    // 만약 Peak가 하나도 없다면 0개 블록
    if (peaksCount === 0) return 0;
    console.log(`(mountains array: ${A})`);
    console.log(`(prefixSum array: ${prefixSum}), peaksCount: ${peaksCount}`);

    // 2. 약수(블록 개수 후보) 찾기 및 검사
    // 블록의 개수 K는 전체 개수 N의 약수여야 함
    // 최대 블록 개수를 찾아야 하므로 'K = peaksCount'부터 1까지 거꾸로 확인
    for (let K = peaksCount; K >= 1; K--) {
        if (N % K === 0) { // K가 N의 약수일 때만 블록 나누기 가능
            console.log(`\nTrying to divide into ${K} blocks:`);

            const blockSize = N / K;
            let allBlocksHavePeak = true;

            // K개의 모든 블록을 검사
            for (let j = 0; j < K; j++) {
                const start = j * blockSize;
                const end = (j + 1) * blockSize - 1;

                // [핵심] 누적합 !!!!! 을 이용한 구간 내 Peak 존재 여부 확인
                // start부터 end 사이에 Peak가 있는지 단 한 번의 계산으로 확인!
                const currentPeaks = prefixSum[end] - (start > 0 ? prefixSum[start - 1] : 0);

                console.log(`  Block ${j + 1}: [${start}, ${end}] has ${currentPeaks} peaks.`);
                
                if (currentPeaks === 0) {
                    allBlocksHavePeak = false;
                    break; // 이 K값은 실패, 다음 약수로 넘어감
                }
            }

            // if (allBlocksHavePeak) return K; // 모든 블록에 Peak가 있으면 즉시 리턴
            if (allBlocksHavePeak) console.log(`All blocks have at least one peak for K=${K}!`);
        }
    }

    return 0;
}

function solutionOthers2(A) {
    const N = A.length;
    if (N < 3) return 0;

    // 1. Peak들의 인덱스만 따로 모으기
    const peaks = [];
    for (let i = 1; i < N - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }
    console.log(`peaks: ${peaks}`);

    const peaksCount = peaks.length;
    // Peak가 없으면 블록을 나눌 의미가 없음
    if (peaksCount === 0) return 0;

    // 2. 약수(블록 개수 K)를 큰 숫자부터 검사
    // 블록 개수 K는 Peak의 개수를 넘을 수 없음
    for (let K = peaksCount; K >= 1; K--) {
        if (N % K === 0) { // K가 N의 약수일 때만 진행
            console.log(`\nTrying to divide into ${K} blocks:`);

            const blockSize = N / K;
            let foundInBlockCount = 0; // 지금까지 Peak를 찾은 블록의 수

            // 3. Peak 리스트를 돌면서 각 블록을 채울 수 있는지 확인
            for (let peakPos of peaks) {
                // 이 Peak가 현재 내가 찾아야 하는 블록(foundInBlockCount)에 속하는가?
                // 예: blockSize가 4일 때, peakPos가 0~3이면 0번 블록, 4~7이면 1번 블록
                const currentBlockIndex = Math.floor(peakPos / blockSize);

                console.log(`  peakPos: ${peakPos}, currentBlockIndex(peakPos[${peakPos}] / blockSize[${blockSize}]): ${currentBlockIndex} ===???? foundInBlockCount: ${foundInBlockCount}`);

                if (currentBlockIndex === foundInBlockCount) {
                    console.log(`  ! currentBlockIndex === foundInBlockCount: ${currentBlockIndex} === ${foundInBlockCount}`);
                    foundInBlockCount++;
                    console.log(`  ! Found peak at position ${peakPos} for block ${foundInBlockCount}/${K}`);
                }
                
                // 이미 K개의 블록을 다 채웠다면 더 볼 필요 없음
                if (foundInBlockCount === K) break;
            }

            // if (foundInBlockCount === K) return K;
            if (foundInBlockCount === K) console.log(`All blocks have at least one peak for K=${K}!`);
        }
    }

    return 0;
}