// N is an odd integer within the range [1..1,000,000];
// each element of array A is an integer within the range [1..1,000,000,000];
// all but one of the values in A occur an even number of times.

const A = [9, 3, 9, 3, 9, 7, 9];
console.log(solution(A));
console.log(solutionOthers(A));

function solution(A) {
    const resultSet = new Set();

    for (let i = 0; i < A.length; i++) {
        if (resultSet.has(A[i]))
            resultSet.delete(A[i]);
        else
            resultSet.add(A[i]);
    }

    // for (const value of resultSet)
    //     console.log(value);

    return resultSet.values().next().value;
}

/**
 * 같은 수를 두 번 XOR하면 0이 됩니다: A ^ A = 0
 * 어떤 수에 0을 XOR하면 자기 자신이 됩니다: A ^ 0 = A
 * XOR은 순서가 상관없습니다 (교환 법칙): A ^ B ^ A = (A ^ A) ^ B = 0 ^ B = B
 */
function solutionOthers(A) {
    let result = 0;
    for (const number of A)
        result = result ^ number; // XOR 연산자 ^

    return result;
}