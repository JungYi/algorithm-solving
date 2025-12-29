const A = [10,2,5,1,8,20];

console.log(solution(A));
console.log(solutionOthers(A));

function solution(A) {
    const sortedArr = A.sort((a,b) => a - b);

    for (let i = 0; i < A.length-2; i++) {
        if (sortedArr[i] + sortedArr[i+1] > sortedArr[i+2]) {
            if ((sortedArr[i] + sortedArr[i+2] > sortedArr[i+1]) && (sortedArr[i+1] + sortedArr[i+2] > sortedArr[i]))
                return 1;
        }
    }

    return 0;
}

function solutionOthers(A) {
    // 코딜리티에서는 괜찮지만 실무에선 복사해서 쓰는 게 좋습니다.
    A.sort((a, b) => a - b);

    for (let i = 0; i < A.length - 2; i++) {
        // 정렬 덕분에 두 가지 조건은 이미 '참'임이 보장됩니다.
        // 오직 이 한 조건만 확인하면 됩니다.
        // 정렬(Sorted)을 하는 순간, A <= B <= C라고 정렬되어 있다면:
        // B + C > A 는 당연히 성립합니다. (가장 큰 것 둘을 더했으니 당연히 제일 작은 것보다 큼)
        // A + C > B 도 당연히 성립합니다. (제일 큰 C가 이미 B보다 크거나 같으니까요)
        if (A[i] + A[i + 1] > A[i + 2]) {
            return 1;
        }
    }

    return 0;
}