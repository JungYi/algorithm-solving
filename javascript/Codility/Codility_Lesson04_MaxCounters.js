const A = [3,4,4,6,1,4,4]; const N = 5; //[3, 2, 2, 4, 2]

console.log(solution(N, A));
//console.log(solutionOthers(A));

function solution(N, A) {
    /**
    let counterArr = new Array(N).fill(0);

    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 1 && A[i] <= N) {
            counterArr[A[i] - 1]++;
        } else if (A[i] === N + 1) {
            const max = counterArr.reduce((acc, curr) => {
                return curr > acc ? curr : acc;
            }, counterArr[0]);
            counterArr.fill(max);
        }
    }
    */

    let counterArr = new Array(N).fill(0);
    let currentMax = 0;
    let lastMaxUpdate = 0;
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 1 && A[i] <= N) {
            let idx = A[i] - 1;
            if (counterArr[idx] < lastMaxUpdate)
                counterArr[idx] = lastMaxUpdate;

            counterArr[idx]++;

            if (counterArr[idx] > currentMax) currentMax = counterArr[idx];
        } else if (A[i] === N + 1) {
            lastMaxUpdate = currentMax;
        }

        console.log(counterArr, 'currentMax: ' + currentMax, 'lastMaxUpdate: ' + lastMaxUpdate);
    }

    for (let i = 0; i < counterArr.length; i++) {
        if (counterArr[i] < lastMaxUpdate)
            counterArr[i] = lastMaxUpdate;
    }

    return counterArr;
}