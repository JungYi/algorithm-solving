const N = 30;

console.log(`solution(N): ${solution(N)}`);
console.log(`solutionOthers(N): ${solutionOthers(N)}`);

// A와 B의 차이가 작을수록(즉, 정사각형에 가까울수록) 둘레는 짧아짐.
// A와 B의 차이가 클수록(즉, 길쭉할수록) 둘레는 길어짐.
function solution(N) {
    if (N === 1) return 4;

    let min = Infinity;
    
    for (let i = 1; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            const quotient = N / i;
            // the perimeter is 2 * (A + B)
            min = Math.min(min, 2*(i+quotient));

            console.log(`i: ${i}, quotient: ${quotient}, perimeter: ${2*(i+quotient)}`);
        }
    }
    return min;
}

function solutionOthers(N) {
    let sideA = 1;
    
    // 1. 루트 N부터 거꾸로 내려오면서 첫 번째로 나누어떨어지는 수를 찾습니다.
    // 그 수가 정사각형에 가장 가까운 약수이기 때문입니다.
    for (let i = Math.floor(Math.sqrt(N)); i >= 1; i--) {
        if (N % i === 0) {
            sideA = i;
            break; // 찾자마자 바로 탈출! (이후는 더 계산할 필요 없음)
        }
    }

    const sideB = N / sideA;
    return 2 * (sideA + sideB);
}