// const N = 10, M = 4; // GCD: 2, LCM: 20
const N = 24, M = 18; // GCD: 6, LCM: 72

console.log(`solution(N, M): ${solution(N, M)}`);

function solution(N, M) {
    // N과 M은 최대 1,000,000,000
    // const answer = lcm(N, M) / M;
    // console.log(lcm(N, M));

    // 1-1. 최대공약수(GCD)
    const gcd = (a, b) => {
        while (b)
            [a, b] = [b, a % b]; // b가 0이 될 때까지 a와 b를 반복해서 나눔
        return a;
    };
    const answer = N / gcd(N, M);

    // 1-2. 최대공약수(GCD)
    const gcd2 = (a, b) => b === 0 ? a : gcd2(b, a % b);

    // 2-1. 최소공배수(LCM)
    const lcm = (a, b) => {
        return (a * b) / gcd(a, b);
    };

    return answer;
}