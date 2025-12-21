const A = [1,3,1,4,2,3,5,4];

console.log(solution(5, A));
//console.log(solutionOthers(5, A));

function solution(X, A) {
    const resultSet = new Set();

    for (let i = 0; i < A.length; i++) {
        if (!resultSet.has(A[i]))
            resultSet.add(A[i]);

        if (resultSet.size === X) return i;
    }
    
    return -1;
}