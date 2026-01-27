const A=[1,4,5,8], B=[4,5,9,10], C=[4,6,7,10,2];

console.log(solution(A, B, C));
// console.log(solutionOthers(A));

function solution(A, B, C) {
    const M = C.length;

    const nailPlanks = (J) => {
        // wrong : const prefixArr = new Array(C.length+1).fill(0);
        // 누적 합의 대상: 못의 개수가 아니라 다리의 "위치(좌표)"
        // 따라서 배열의 크기는 A, B, C에 등장하는 가장 큰 숫자(최대 좌표)
        const nailsAt = new Array(2 * M + 1).fill(0);

        // 1. 못 찍기
        for (let i = 0; i < J; i++) 
            nailsAt[C[i]] = 1;
        // 2. 누적 합
        for (let i = 1; i < nailsAt.length; i++) 
            nailsAt[i] += nailsAt[i-1];
        // 3. 모든 판자 확인
        for (let k = 0; k < A.length; k++) {
            console.log(`A[k]: ${A[k]}, B[k]: ${B[k]}`);
            console.log(`nailsAt[B[${k}]](${nailsAt[B[k]]}) - nailsAt[A[k]-1](${nailsAt[A[k]-1]}) = ${nailsAt[B[k]] - nailsAt[A[k]-1]}`);

            // nailsAt[B[k]] - nailsAt[A[k]-1] 확인: 
            // A부터 B 사이 전체를 훑어서 못이 하나라도 걸렸는지 봄.
            if ((nailsAt[B[k]] - nailsAt[A[k]-1]) === 0) return false;
        }
        console.log(nailsAt);
        return true;
    };

    // 못의 개수를 binary_search
    let left = 1;
    let right = M;
    let minNails = -1;

    while (left <= right) {
        let mid = left + Math.floor((right-left)/2);

        // returns the minimum number of nails
        if (nailPlanks(mid)) {
            minNails = mid;
            right = mid-1;
        } else left = mid+1;
    }
    return minNails;
}