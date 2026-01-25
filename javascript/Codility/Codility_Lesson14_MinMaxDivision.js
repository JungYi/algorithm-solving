// const K = 3, M = 5, A = [2,1,5,1,2,2,2];
const K = 3, M = 10, A = [10, 10, 10, 10, 10];

console.log(solution(K, M, A));
// console.log(solutionOthers(A));

function solution(K, M, A) {
    const countBlocks = (m) => {
        let blocks = 1;
        let sum = 0;

        for (let i = 0; i < A.length; i++) {
            if (sum + A[i] > m) {
                blocks++;
                sum = A[i];
            } else sum += A[i];
            // console.log(`i=${i}(A[i]=${A[i]}), sum=${sum}, blocks = ${blocks} 만큼의 가방`);
        }
        // console.log(`m(최대값)=${m} 일때, blocks = ${blocks} 만큼의 가방이 필요.`);
        return blocks;
    }

    // const totalSum = A.reduce((acc, curr) => acc + curr, 0);
    // 진짜 범위를 구하세요. M을 쓰지 말고!
    let totalSum = 0;
    let realMax = 0;
    for (let num of A) {
        totalSum += num;
        if (num > realMax) realMax = num;
    }
    
    let left = realMax;     // 시작: 최소한 가장 큰 원소부터
    let right = totalSum;   // 끝: 모든 원소의 합
    let answer = totalSum;  // 일단 최대값으로 초기화
    
    while (left <= right) {
        // let mid = Math.floor((left+right)/2);
        let mid = left + Math.floor((right-left)/2);

        if (countBlocks(mid) <= K) {
            answer = mid;
            right = mid-1;

            console.log(`oh ! mid = ${mid} 일때, blocks = ${countBlocks(mid)} 만큼의 가방`);
        } else {
            left = mid+1;
            
            console.log(`K(${K}) mid = ${mid} 일때, blocks = ${countBlocks(mid)} 만큼의 가방`);
        }
    }

    return answer;
}