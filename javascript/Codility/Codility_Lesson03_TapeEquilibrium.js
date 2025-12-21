// const A = [3,1,2,4,3];
const A = [1000, 1000, 1000, -1000, -1000, -1000];

console.log(solution(A));
//console.log(solutionOthers(A));

function solution(A) {
    const sumA = A.reduce((acc, curr) => acc + curr, 0);

    let sumLeft = 0;
    let sumRight = sumA;
    let min = Infinity;

    for (let i = 0; i < A.length - 1; i++) {
        sumLeft += A[i];
        sumRight -= A[i];

        //min = Math.min(min, Math.abs(sumLeft - sumRight));

        const diff = Math.abs(sumLeft - sumRight);
        min = diff < min ? diff : min;
    }
    
    return min;
}