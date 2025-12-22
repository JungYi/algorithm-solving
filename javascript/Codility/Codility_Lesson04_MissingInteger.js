// const A = [3,1,2,4,3];
// const A = [1000, 1000, 1000, -1000, -1000, -1000];
// const A = [1,2,3,4];
// const A = [-3,-1,0];
// const A = [-1,0,1,5];
// const A = [-1,1,1,4];
// const A = [9,9,9,9];
// const A = [1,2];
const A = [2,3];

console.log(solution(A));
//console.log(solutionOthers(A));

function solution(A) {
    const N = A.length;
    const checklist = new Array(N+1).fill(false);

    for (let i = 0; i < N; i++) {
        // if (A[i] <= 0 || A[i] > N) continue;
        // else checklist[A[i] - 1] = true;
        if (A[i] >= 1 && A[i] <= N) checklist[A[i]] = true;
    }

    // // return 1은 위험
    // for (let i = 0; i < checklist.length; i++)
    //     if (checklist[i] === false) return i + 1;
    // return 1;

    for (let i = 1; i <= N; i++)
        if (checklist[i] === false) return i;
    return N + 1;
}