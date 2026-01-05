// const A = [23171, 21011, 21123, 21366, 21013, 21367];
// const A = [10,20,5,25,15,30];
const A = [10,20,1,5,19,100];

console.log(solution(A));
console.log(solutionOthers(A));

function solution(A) {
    if (A.length <= 1) return 0;

    let min = A[0];
    let max = A[0];
    let currentProfit = 0;
    let maxProfit = 0;

    for (let i = 1; i < A.length; i++) {
        if (A[i-1] > A[i]) {
            if (min > A[i]) {
                min = A[i];
                max = A[i];
            } else if (min < A[i]) {
                max = A[i];
            }
        } else if (A[i-1] < A[i]) {
            if (max < A[i]) {
                max = A[i];
            }
        }
        currentProfit = max - min;

        maxProfit = currentProfit > maxProfit ? currentProfit : maxProfit;

        // console.log(`i: ${i}, min: ${min}, max: ${max}, currentProfit: ${currentProfit}, maxProfit: ${maxProfit}`);
    }

    return maxProfit;
}

function solutionOthers(A) {
    if (A.length <= 1) return 0;

    let minPrice = A[0];
    let maxProfit = 0;

    for (let i = 1; i < A.length; i++) {
        // 1. 최솟값 갱신: "지금이 제일 싼가?"
        if (A[i] < minPrice) {
            minPrice = A[i];
        } // 2. 수익 계산: "지금 팔면 이득인가?"
        else {
            let currentProfit = A[i] - minPrice;
            if (currentProfit > maxProfit) maxProfit = currentProfit;
        }
        console.log(`i: ${i}, minPrice: ${minPrice}, currentProfit: ${A[i] - minPrice}, maxProfit: ${maxProfit}`);
    }

    return maxProfit;
}