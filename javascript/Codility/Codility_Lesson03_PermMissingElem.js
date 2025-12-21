const A = [2,3,1,5];

console.log(solution(A));
console.log(solutionOthers(A));

function solution(A) {
    const N = A.length + 1;
    const sumN = (N * (N + 1)) / 2;

    // let sumA = 0;
    // for (let i = 0; i < A.length; i++) 
    //     sumA += A[i];

    const sumA = A.reduce((acc, curr) => acc + curr, 0);

    return sumN-sumA;
}

function solutionOthers(A) {
    let result = 0;

    for (let i = 1; i <= A.length + 1; i++) 
        result = result ^ i;


    // for (let i = 0; i < A.length; i++) 
    //     result = result ^ A[i];
    
    result = A.reduce((acc, curr) => acc ^ curr, result);

    return result;
}