const A = [1,3,1,4,2,3,5,4];
// const A = [2,1,1,2,3,1];
// const A = [];

console.log(solution(A));
console.log(solutionOthers(A));

function solution(A) {
    if (A.length === 0) return 0;

    const resultSet = new Set();
    for (let i = 0; i < A.length; i++) {
        if (!resultSet.has(A[i]))
            resultSet.add(A[i]);
    }

    console.log(resultSet);
    return resultSet.size;
}

function solutionOthers(A) {
    if (A.length === 0) return 0;

    const sortedArr = A.sort((a, b) => a - b);

    let count = 1;
    for (let i = 1; i < sortedArr.length; i++) 
        if (sortedArr[i] !== sortedArr[i - 1])
            count++;

    return count;
}