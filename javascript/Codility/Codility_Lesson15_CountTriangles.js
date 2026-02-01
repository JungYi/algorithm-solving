// const A = [10,2,5,1,8,12];
// A = [10, 100, 101, 102, 103, 104, 200];
A = [1, 10, 100, 101, 102, 103, 104, 200, 210];

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