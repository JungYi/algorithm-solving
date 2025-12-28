const A = [4,2,2,5,1,5,8];

console.log(solution(A));
console.log(solutionOthers(A));

/** 
    어떤 4개짜리 슬라이스 (a, b, c, d)가 있다.
    이 4개의 평균은 사실 (a, b)의 평균과 (c, d)의 평균 중 하나보다는 크거나 같습니다.
    왜 3개까지?
    음수와 홀수.
    2개짜리 조각들을 아무리 합쳐도, 그 중간에 낀 원소 하나가 아주 작은 음수라면 3개짜리가 가장 작아질 수 있습니다.
    4개부터는 다시 2+2로 쪼개지니까 필요 없음.
 */
function solution(A) {
    const resultArr = new Array(A.length);
    let min = Infinity;
    let minPov = 0;

    for (let i = 0; i < A.length - 1; i++) {
        if (i === A.length - 2) 
            resultArr[i] = (A[i]+A[i+1])/2
        else 
            resultArr[i] = ((A[i]+A[i+1])/2 < (A[i]+A[i+1]+A[i+2])/3) ? (A[i]+A[i+1])/2 : (A[i]+A[i+1]+A[i+2])/3;
        
        if (min > resultArr[i]) {
            min = resultArr[i];
            minPov = i;
        }
    }

    return minPov;
}

function solutionOthers(A) {
    let minAvg = Infinity;
    let minIndex = 0;

    for (let i = 0; i < A.length - 1; i++) {
        let slice2Avg = (A[i] + A[i+1]) / 2;
        if (slice2Avg < minAvg) {
            minAvg = slice2Avg;
            minIndex = i;
        }

        if (i < A.length - 2) {
            let slice3Avg = (A[i] + A[i+1] + A[i+2]) / 3;
            if (slice3Avg < minAvg) {
                minAvg = slice3Avg;
                minIndex = i;
            }
        }
    }

    return minIndex;
}