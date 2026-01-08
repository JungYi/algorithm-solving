const N = 24;

console.log(`solution(N): ${solution(N)}`);
console.log(`solutionPractice(N): ${solutionPractice(N)}`);
console.log(`solutionOthers(N): ${solutionOthers(N)}`);
console.log(`solutionOthers2(N): ${solutionOthers2(N)}`);

function solution(N) {
    let totalDivisors = 1; 
    let divisor = 2;

    while (N > 1) {
        if (N % divisor === 0) {
            let count = 0;

            while (N % divisor === 0) {
                count++;
                N /= divisor;
            }

            totalDivisors *= (count + 1);
        }
        divisor++;
    }

    return totalDivisors;
}

function solutionPractice(N) {
    let factors = [];
    let factorCounts = 0;
    let answer = 1;
    let divisor = 2;

    while (N > 1) {
        if (N % divisor === 0) {
            let count = 0; // 이 소인수가 몇 번 나오는지 셀 변수

            while (N % divisor === 0) {
                factorCounts++;
                factors.push(divisor);

                count++; // 지수 증가
                N /= divisor;

                console.log(`  divisor: ${divisor}, factorCounts: ${factorCounts}, N: ${N}`);
            }

            // 지수를 구했으니 공식 적용: (지수 + 1)을 곱해준다
            answer *= (count + 1);

            factors.push(`${divisor}^${count}`);
        }
        divisor++;
        console.log(`N: ${N}, divisor: ${divisor}, factorCounts: ${factorCounts}, answer: ${answer}`);
    }
    console.log(factors);

    return answer;
}

function solutionOthers(N) {
    let count = 0;
    let factors = [];

    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            count++; // i가 n의 약수이면 개수 증가
            factors.push(i);
        }
    }
    console.log(factors);

    const getDivisors = (num) => {
        const divisors = [];
        for(let i = 1 ; i <= num/2 ; i++){
            if(num % i === 0) divisors.push(i);
        }
        return [...divisors, num];
    }
    console.log(`getDivisors(N): ${getDivisors(N)}`);

    return count;
}

// 제곱근을 활용한 효율적인 방법 (권장)
// 1부터 √n까지만 반복하여 약수를 찾고, 
// 약수 i를 찾으면 n/i도 약수임을 이용해 개수를 계산합니다.
// 제곱수(예: 9)인 경우 √n이 정수이므로 약수 √n을 한 번만 세도록 처리합니다
function solutionOthers2(N) {
    let count = 0;
    const sqrtN = Math.sqrt(N);

    // --------------1.
    // 1부터 √n까지 반복
    for (let i = 1; i <= sqrtN; i++) {
        if (N % i === 0) {
            if (i * i === N) { // i가 제곱근이면 (예: 3*3=9)
                count += 1;
            } else { // i와 N/i가 다른 약수이면 (예: 2와 6)
                count += 2;
            }
            console.log(`-----i: ${i}, N/i: ${N/i}`);
        }
        console.log(`i: ${i}, count: ${count}`);
    }

    let count2 = 0;
    let j = 1;
    // --------------2.
    // i*i <= N 까지만 루프를 돕니다 (효율성 핵심)
    while (j*j < N) {
        if (N % j === 0) {
            count2 += 2; // i와 (N/i) 두 개를 한꺼번에 카운트
        }
        j++;
    }
    // 제곱근이 딱 떨어지는 경우 (예: 16의 4) 중복 방지를 위해 따로 체크
    if (j*j === N) {
        count2 += 1;
    }

    // --------------3.
    const divisors = [];
    // for (let k = 1; k <= Math.sqrt(N); k++) {
    for (let k = 1; k*k <= N; k++) {
        if (N % k === 0) {
            divisors.push(k);
            // if (N / k !== k) divisors.push(N / k);
            if (k*k !== N) divisors.push(N / k);
        }
    }
    console.log(divisors.sort((a, b) => a - b));

    return count;
}