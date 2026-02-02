// const A = [10,2,5,1,8,12];
// const A = [10, 100, 101, 102, 103, 104, 200];
const A = [1, 10, 100, 101, 102, 103, 104, 200, 210];

console.log(solution(A));
// console.log(`solutionPractice(A): ${solutionPractice(A)}`);

function solutionPractice(A) {
    if (A.length < 3) return 0;

    A.sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < A.length - 2; i++) {
        for (let j = i+1; j < A.length - 1; j++) {
            let k = j+1;

            while (k < A.length) {
                console.log(`i=[${i}], j=[${j}], k=[${k}]`);
                console.log(`A[${i}]=${A[i]},  A[${j}]=${A[j]},  A[${k}]=${A[k]}, count=${count}`);
                console.log(`---A[i]+A[j] = ${A[i] + A[j]} >>>>>> A[${k}]=${A[k]}, count=${count}`);
                
                if (A[i] + A[j] > A[k]) count++;
                k++;
            }
        }
    }
    return count;
}

function solution(A) {
    if (A.length < 3) return 0;

    A.sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < A.length - 2; i++) {
        let k = i+2; // k는 j 루프 밖에서 딱 한 번 시작!
        for (let j = i+1; j < A.length - 1; j++) {
            // 삼각형 문제는 변의 길이가 모두 양수인 것을 전제로 하거나,
            // 0이 있더라도 삼각형 성립이 안 되므로 보통 큰 문제가 안 되지만,
            // 더 안전하게 짜고 싶다면 아래와 같이 안전장치.
            // 꼬리 j가 머리 k를 따라잡았다면, 머리를 한 칸 앞으로 강제 이동!
            if (k <= j) k = j + 1;

            while (k < A.length && A[i] + A[j] > A[k]) {
                console.log(`i=[${i}], j=[${j}], k=[${k}]`);
                console.log(`A[${i}]=${A[i]},  A[${j}]=${A[j]},  A[${k}]=${A[k]}, count=${count}`);
                console.log(`---A[i]+A[j] = ${A[i] + A[j]} >>>>>> A[${k}]=${A[k]}, count=${count}`);
                k++;
                console.log(`...k=[${k}]`);
            }
            console.log(`...k is over.`);
            count += (k-j-1);
            console.log(`...k-j-1=[${k-j-1}]`);
        }
    }
    return count;
}