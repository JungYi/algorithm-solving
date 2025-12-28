const S = "CAGCCTA"; const P = [2, 5, 0]; const Q = [4, 5, 6];

console.log(solution(S, P, Q));
console.log(solutionOthers(S, P, Q));
console.log(solutionOthers2(S, P, Q));

function solution(S, P, Q) {
    const rows = 4;
    const cols = S.length;
    const dnaArray = Array.from({ length: rows }, () => new Array(cols).fill(0));
    const resultArr = new Array(P.length);

    if (S[0] === 'A') dnaArray[0][0]++;
    else if (S[0] === 'C') dnaArray[1][0]++;
    else if (S[0] === 'G') dnaArray[2][0]++;
    else if (S[0] === 'T') dnaArray[3][0]++;

    for (let i = 1; i < S.length; i++) {
        dnaArray[0][i] = dnaArray[0][i-1];
        dnaArray[1][i] = dnaArray[1][i-1];
        dnaArray[2][i] = dnaArray[2][i-1];
        dnaArray[3][i] = dnaArray[3][i-1];

        if (S[i] === 'A') dnaArray[0][i]++;
        else if (S[i] === 'C') dnaArray[1][i]++;
        else if (S[i] === 'G') dnaArray[2][i]++;
        else if (S[i] === 'T') dnaArray[3][i]++;
    }
    
    for (let i = 0; i < P.length; i++) {
        if (P[i] === 0) {
            for (let j = 0; j < 4; j++) {
                if (dnaArray[j][Q[i]] !== 0) {
                    resultArr[i] = j+1;
                    break;
                }
            }
        } else {
            for (let j = 0; j < 4; j++) {
                if ((dnaArray[j][Q[i]] - dnaArray[j][P[i]-1]) !== 0) {
                    resultArr[i] = j+1;
                    break;
                }
            }
        }
    }

    return resultArr;
}

function solutionOthers(S, P, Q) {
    const N = S.length;
    const M = P.length;
    
    const dnaMap = { 'A': 0, 'C': 1, 'G': 2, 'T': 3 };
    
    // 누적합 배열 (길이를 N+1로 해서 0번을 비워둠)
    // Int32Array는 메모리 효율이 좋고 초기값이 0입니다.
    const countsArr = [
        new Int32Array(N + 1), // A
        new Int32Array(N + 1), // C
        new Int32Array(N + 1), // G
        new Int32Array(N + 1)  // T
    ];
    const resultArr = new Int32Array(M);

    // 1. 전처리: 누적합 테이블 생성 O(N)
    for (let i = 0; i < N; i++) {
        const dnaChar = S[i];
        for (let j = 0; j < 4; j++)
            countsArr[j][i + 1] = countsArr[j][i];
        countsArr[dnaMap[dnaChar]][i + 1]++;
    }

    // 2. 질의 처리: 구간 검사 O(M)
    for (let i = 0; i < M; i++) {
        const start = P[i];
        const end = Q[i] + 1; // 누적합 배열이 N+1이므로 +1 해줌

        for (let j = 0; j < 4; j++) {
            if (countsArr[j][end] - countsArr[j][start] > 0) {
                resultArr[i] = j + 1;
                break;
            }
        }
    }

    return Array.from(resultArr);
}

function solutionOthers2(S, P, Q) {
    const N = S.length;
    const M = P.length;

    // 0번 인덱스를 비워두는 N+1 크기의 누적 합 테이블
    // T(4)는 어차피 나머지 셋이 없으면 최소값이므로 계산에서 제외해도 무방
    const A = new Int32Array(N + 1);
    const C = new Int32Array(N + 1);
    const G = new Int32Array(N + 1);

    // 1. 전처리: 누적합 계산 O(N)
    for (let i = 0; i < N; i++) {
        A[i + 1] = A[i];
        C[i + 1] = C[i];
        G[i + 1] = G[i];

        if (S[i] === 'A') A[i + 1]++;
        else if (S[i] === 'C') C[i + 1]++;
        else if (S[i] === 'G') G[i + 1]++;
    }

    const result = new Int32Array(M);

    // 2. 구간 질의: O(M)
    for (let i = 0; i < M; i++) {
        const from = P[i];
        const to = Q[i] + 1; // 누적합 테이블 인덱스 보정

        // 우선순위 1(A), 2(C), 3(G) 순서대로 구간 내 존재 확인
        if (A[to] - A[from] > 0) result[i] = 1;
        else if (C[to] - C[from] > 0) result[i] = 2;
        else if (G[to] - G[from] > 0) result[i] = 3;
        else result[i] = 4; // 셋 다 없으면 무조건 T(4)
    }

    return Array.from(result);
}

function solution(S, P, Q) {
    const N = S.length;
    const M = P.length;

    const prefixSumsArr = {
        'A': new Int32Array(N + 1),
        'C': new Int32Array(N + 1),
        'G': new Int32Array(N + 1)
    };

    for (let i = 0; i < N; i++) {
        const char = S[i];
        
        prefixSumsArr['A'][i + 1] = prefixSumsArr['A'][i];
        prefixSumsArr['C'][i + 1] = prefixSumsArr['C'][i];
        prefixSumsArr['G'][i + 1] = prefixSumsArr['G'][i];

        if (prefixSumsArr[char] !== undefined) {
            prefixSumsArr[char][i + 1]++;
        }
    }

    const results = [];

    for (let i = 0; i < M; i++) {
        const from = P[i];
        const to = Q[i] + 1; // 누적합 인덱스 보정
        
        if (prefixSumsArr['A'][to] - prefixSumsArr['A'][from] > 0) {
            results.push(1);
        } else if (prefixSumsArr['C'][to] - prefixSumsArr['C'][from] > 0) {
            results.push(2);
        } else if (prefixSumsArr['G'][to] - prefixSumsArr['G'][from] > 0) {
            results.push(3);
        } else {
            results.push(4);
        }
    }

    return results;
}