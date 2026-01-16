const A = [15, 10, 9], B = [75, 30, 5];

console.log(`solution(A, B): ${solution(A, B)}`);
console.log(`solutionOthers(A, B): ${solutionOthers(A, B)}`);

// Correctness 100%
// Performance 66%
function solution(A, B) {
    const primeFactorization = (N) => {
        // const factors = []; // 소인수들을 저장할 배열
        const factorsSet = new Set(); // 중복 제거를 위한 Set
        let divisor = 2; // 2부터 시작

        // N이 1보다 클 동안 반복
        while (N > 1) {
            // 현재 divisor로 N이 나누어 떨어지면
            if (N % divisor === 0) {
                // factors.push(divisor); // 배열에 추가
                factorsSet.add(divisor); // Set에 추가
                N /= divisor; // N을 divisor로 나눈 몫으로 업데이트
            } else {
                divisor++; // 나누어 떨어지지 않으면 다음 숫자로
            }
        }
        return factorsSet;
    }

    let answer = 0;
    for (let k = 0; k < A.length; k++) {
        const aArr = Array.from(primeFactorization(A[k]));
        const bArr = Array.from(primeFactorization(B[k]));
        
        if (aArr.length === bArr.length) {
            let flag = true;
            for (let i = 0; i < aArr.length; i++) {
                if (aArr[i] !== bArr[i]) {
                    flag = false;
                    break;
                }
            }
            if (flag) answer++;
        }
    }

    return answer;
}

function solutionOthers(A, B) {
    // 1. 최대공약수(GCD) 함수 내장
    const gcd = (a, b) => {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    // 2. x의 모든 소인수가 g 안에 포함되어 있는지 확인하는 함수
    const hasAllFactorsInGCD = (x, g) => {
        let tempX = x;
        let tempGCD;
        console.log(`Checking if all prime factors of ${x} are in GCD ${g}`);

        while (tempX > 1) {
            tempGCD = gcd(tempX, g);
            console.log(`tempX: ${tempX}, tempGCD: ${tempGCD}`);
            
            // 만약 더 이상 공통된 소인수가 없다면 (GCD가 1)
            // tempX에 g와 공유하지 않는 소인수가 남았다는 뜻!
            if (tempGCD === 1) break;
            
            // 공통된 성분(GCD)만큼 tempX를 깎아냄
            tempX /= tempGCD;
        }
        
        return tempX === 1; // 1까지 깎였다면 모든 소인수가 공유된 것
    };

    let count = 0;

    // 3. 배열을 돌며 검사
    for (let i = 0; i < A.length; i++) {
        const a = A[i];
        const b = B[i];
        
        // 두 숫자의 공통 소인수 집합은 반드시 이들의 GCD 안에 들어있음
        const commonGCD = gcd(a, b);
        console.log(`--Pair (${a}, ${b}), common GCD: ${commonGCD}`);
        
        // A와 B 각각의 모든 소인수가 공통 GCD 안에 사는지 확인
        if (hasAllFactorsInGCD(a, commonGCD) && hasAllFactorsInGCD(b, commonGCD)) {
            count++;
        }
    }

    return count;
}