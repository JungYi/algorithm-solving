// const A = [-3,1,2,-2,5,6];
const A = [-5, 5, -5, 4];

console.log(solution(A));

function solution(A) {
    const sortedArr = A.sort((a, b) => a - b);
    const N = A.length;

    // 케이스 A: 가장 큰 수 3개의 곱
    // 케이스 B: 가장 작은 수(큰 음수) 2개 * 가장 큰 양수 1개
    // N이 100,000일 때 정렬의 시간 복잡도는 $O(N \log N) 이 정도면 충분

    const answer = Math.max(sortedArr[0]*sortedArr[1]*sortedArr[N-1], sortedArr[N-3]*sortedArr[N-2]*sortedArr[N-1]);

    return answer;
}