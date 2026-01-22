const A = [4,4,5,5,1], B = [3,2,4,3,1];

console.log(solution(A, B));
// console.log(solutionOthers(A));

function solution(A, B) {
    const getBasicFibArronacciArray = (N) => {
        if (N <= 0) return [];
        if (N === 1) return [0];

        const result = [0, 1];
        for (let i = 2; i < N; i++)
            result.push(result[i-1] + result[i-2]);
        return result;
    };
    /**
     * (A + B) (mod M) = ((A (mod M)) + (B (mod M))) (mod M)
     * 
     * 더한 다음에 나머지를 구하나, 나머지를 구한 것끼리 더하나 결과는 같다
     * 이 문제에서 B의 최댓값이 30이므로, 모든 피보나치 수를 구할 때 미리 2^{30}으로 나머지를 구하면서
     * 배열을 채우면 숫자가 폭발하지 않음.
     */
    const getFibonacciArray = (L) => {
        // 사다리가 A칸일 때 방법의 수는 피보나치 A+1번째 값과 같습니다. 
        // (A가 4일 때 5가지이므로, 인덱스 관리를 위해 L+1 크기로 만듭니다.)
        const fib = new Array(L + 1);
        const MAX_MOD = 1 << 30; // 2의 30승 (문제에서 요구하는 최대 범위)
        // 1 << 30은 비트 연산자로, 숫자 1을 왼쪽으로 30번 밀라는 뜻

        fib[0] = 1; // 0칸 오르는 법 (아무것도 안 함) : 1가지
        fib[1] = 1; // 1칸 오르는 법 (1) : 1가지
        
        for (let i = 2; i <= L; i++) {
            // 더할 때마다 미리 나머지를 구해서 저장합니다. 
            // 이렇게 하면 숫자가 절대 2^30을 넘지 않아 안전합니다!
            fib[i] = (fib[i - 1] + fib[i - 2]) % MAX_MOD;
        }
        return fib;
    };
    console.log(getBasicFibArronacciArray(10));
    console.log(getFibonacciArray(10));
    
    const fibArr = new Array(A.length + 1);
    const MAX_MOD = 1 << 30;

    fibArr[0] = 1;
    fibArr[1] = 1;
    
    for (let i = 2; i <= A.length; i++)
        fibArr[i] = (fibArr[i-1] + fibArr[i-2]) % MAX_MOD;

    const resultArr = new Array(A.length);
    for (let i = 0; i < A.length; i++) {
        // resultArr[i] = fibArr[A[i]];
        resultArr[i] = fibArr[A[i]] % (1 << B[i]);
    }

    return resultArr;
}