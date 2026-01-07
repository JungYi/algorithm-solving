// const A = [3,2,-6,-1,4,5,-1,2];
const A = [3,2,6,1,4,5,1,2];

console.log(solution(A));
console.log(solutionOthers(A));

// 카데인 알고리즘 "전체 배열의 최대 합을 구하는 알고리즘"
// "반드시 i번째 원소를 포함하면서 끝나는 최대 합"
// 즉, 어디선가 시작해서 i에서 끝나는 최선
function solution(A) {
    if (A.length === 3) return 0;

    // let pov = 4;
    const leftSum = new Array(A.length).fill(0);
    const rightSum = new Array(A.length).fill(0);
    // let leftMax = A[1];
    // let rightMax = A[pov+1];
    let max = 0;

    // "3에서 끝나는 카데인 결과값" 안에는
    // 이미 "3을 끝점으로 했을 때 가장 이득인 시작점 X"의 정보가 녹아있다.

    // 1. 왼쪽 날개 : 인덱스 1부터 N-2까지 쭉 가면서 각 지점에서 "끝나는" 최선을 기록
    for (let i = 1; i < A.length - 1; i++) 
        leftSum[i] = Math.max(0, leftSum[i-1] + A[i]);
    
    // 2. 오른쪽 날개 : 인덱스 N-2부터 1까지 거꾸로 오면서 각 지점에서 "시작하는" 최선을 기록
    for (let i = A.length - 2; i > 0; i--) 
        rightSum[i] = Math.max(0, rightSum[i+1] + A[i]);
    
    console.log(`leftSum: ${leftSum}`);
    console.log(`rightSum: ${rightSum}`);

    for (let i = 1; i < A.length - 1; i++) {
        let currentSum = leftSum[i-1] + rightSum[i+1];
        max = Math.max(max, currentSum);
        console.log(`i: ${i}, leftSum: ${leftSum[i-1]}, rightSum: ${rightSum[i+1]}, currentSum: ${currentSum} , max: ${max}`);
    }

    return max;
}

function solutionOthers(A) {
    const N = A.length;
    if (N <= 3) return 0;

    // 1. leftSum은 어쩔 수 없이 미리 다 구해놔야 합니다. 
    // 왜냐하면 마지막에 '합체'할 때 왼쪽 값이 계속 필요하니까요.
    const leftSum = new Array(N).fill(0);
    for (let i = 1; i < N - 1; i++) {
        leftSum[i] = Math.max(0, leftSum[i - 1] + A[i]);
    }

    // 2. 여기서부터 지독한 최적화!
    // rightSum 배열 대신, '지금 막 계산한 오른쪽 값' 하나만 들고 갑니다.
    let maxDoubleSlice = 0;
    let currentRight = 0; // 이 녀석이 실시간 rightSum 역할을 합니다.

    // 오른쪽 끝(N-2)부터 왼쪽으로 오면서 실시간으로 합체!
    // Y가 N-2일 때부터 1일 때까지 거꾸로 훑습니다.
    for (let Y = N - 2; Y > 0; Y--) {
        // [합체!] 현재 Y 지점에서의 최댓값 갱신
        // Y 바로 왼쪽 값(이미 계산됨) + Y 바로 오른쪽 값(지금 실시간 계산됨)
        maxDoubleSlice = Math.max(maxDoubleSlice, leftSum[Y - 1] + currentRight);

        // [다음 단계를 위한 업데이트]
        // 이제 Y가 왼쪽으로 한 칸 이동할 테니, 
        // 지금의 A[Y]는 다음 루프(Y-1 지점 기준)에서 '오른쪽 날개의 시작점'이 됩니다.
        currentRight = Math.max(0, currentRight + A[Y]);
    }

    return maxDoubleSlice;
}