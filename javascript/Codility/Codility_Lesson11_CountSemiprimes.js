const N = 26; const P = [1, 4, 16]; const Q = [26, 10, 20];

console.log(`solution(N): ${solution(N, P, Q)}`);
console.log(`solutionOthers(N, P, Q): ${solutionOthers(N, P, Q)}`);

/**
 * 약수 (Divisor) : 어떤 수를 나누어떨어지게 하는 수 "ex. 6의 약수: 1, 2, 3, 6"
 * 소수 (Prime) : 1보다 크고, 약수가 딱 2개(1과 자신)인 수 "ex. 2(1, 2), 3(1, 3), 5(1, 5)"
 * 반소수 (Semiprime) : 소수 2개를 곱해서 만든 수 "ex. 4(2x2), 6(2x3), 9(3x3)"
 */
function solution(N, P, Q) {
    // 에라토스테네스의 체 (Sieve of Eratosthenes) - 범위 내 모든 소수 찾기
    const isPrime = new Array(N+1).fill(true); // 모든 수를 소수로 가정
    isPrime[0] = isPrime[1] = false; // 0,1 제외
    const primes = [];
    for (let i = 2; i * i <= N; i++) {
        if (isPrime[i]) { // i가 소수라면
            for (let j = i*i; j <= N; j += i) {
                isPrime[j] = false; // i의 배수들을 소수가 아님으로 표시
            }
        }
    }
    
    for (let i = 2; i <= N; i++) 
        if (isPrime[i]) primes.push(i);
    console.log(`Primes up to ${N}:`, primes);

    // generate semiprimes
    const semiprimes = [];
    for (let i = 0; i < primes.length; i++) {
        if (primes[i] * primes[i] > N) break;

        for (let j = i; j < primes.length; j++) {
            console.log(`Checking primes[${i}] * primes[${j}]: ${primes[i]} * ${primes[j]} = ${primes[i]*primes[j]}`);
            if (primes[i]*primes[j] <= N) {
                semiprimes.push(primes[i]*primes[j]);
            } else break;
        }
    }
    semiprimes.sort((a, b) => a - b);
    console.log(`Semiprimes up to ${N}:`, semiprimes);

    const semiprimesPrefixSum = new Array(N).fill(0);
    let index = 0;
    for (let i = 1; i <= N; i++) {
        if (i === semiprimes[index]) {
            semiprimesPrefixSum[i] = semiprimesPrefixSum[i-1] + 1;
            index++;
        } else {
            semiprimesPrefixSum[i] = semiprimesPrefixSum[i-1];
        }
    }
    console.log(`Semiprimes Prefix Sum:`, semiprimesPrefixSum);

    const answer = [];
    for (let i = 0; i < P.length; i++) 
        answer.push(semiprimesPrefixSum[Q[i]]-semiprimesPrefixSum[P[i]-1]);



    return answer;
}

function solutionOthers(N, P, Q) {
    // 1. 에라토스테네스의 체로 소수 판별
    const isPrime = new Array(N + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    const primes = [];

    for (let i = 2; i <= N; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (let j = i * i; j <= N; j += i) isPrime[j] = false;
        }
    }

    // 2. 반소수 표시 (정렬 없이 인덱스에 직접 체크)
    const isSemiprime = new Array(N + 1).fill(0);
    for (let i = 0; i < primes.length; i++) {
        if (primes[i] * primes[i] > N) break;
        for (let j = i; j < primes.length; j++) {
            if (primes[i] * primes[j] <= N) isSemiprime[primes[i] * primes[j]] = 1;
            else break;
        }
    }

    // 3. 누적 합 계산
    const prefixSum = new Array(N + 1).fill(0);
    for (let i = 1; i <= N; i++) {
        prefixSum[i] = prefixSum[i - 1] + isSemiprime[i];
    }
    console.log(`Prefix Sum of Semiprimes:`, prefixSum);

    // 4. 쿼리 응답
    return P.map((start, idx) => prefixSum[Q[idx]] - prefixSum[start - 1]);
}