// const A = [3,1,2,3,6];
// const A = [1,2,3,4,5,6,7,8,9];
// const A = [3,1,2,3,6,3,12,3,6,3,3,6];
const A = [100,100,100,100,1,2,3,4,5,10,2,5];

// console.log(solution(A));
console.log(solutionOthers(A));

function solution(A) {
    const N = A.length;
    if (N === 1) return [0];

    const numCountArr = new Array(1000001).fill(0);
    const result = [];

    for (let i = 0; i < N; i++) {
        numCountArr[A[i]]++;
        // console.log(`numCountArr[${A[i]}]: ${numCountArr[A[i]]}`);
    }

    for (let i = 0; i < N; i++) {
        let divisorCount = 0;
        console.log(`-- A[${i}]: ${A[i]} --`);

        for (let j = 1; j <= Math.sqrt(A[i]); j++) {
            if (A[i] % j === 0) {
                if (j !== A[i]/j) divisorCount += numCountArr[j] + numCountArr[A[i]/j];
                if (j === A[i]/j) divisorCount += numCountArr[j];

                console.log(`  j: ${j}, A[i]/j: ${A[i]/j}, numCountArr[${j}]: ${numCountArr[j]}, numCountArr[${A[i]/j}]: ${numCountArr[A[i]/j]}, divisorCount: ${divisorCount}`);
            }
        }
        result.push(N - divisorCount);
    }

    return result;
}

function solutionOthers(A) {
    const N = A.length;
    
    const numCountArr = new Array(1000001).fill(0);
    for (const num of A) numCountArr[num]++;

    // 이미 계산한 결과 저장소 (캐시)
    const cache = {}; 
    const result = [];

    for (const num of A) {
        // 이미 계산해본 숫자라면? 장부 뒤지지 말고 바로 가져와!
        if (cache[num] !== undefined) {
            console.log(`-- num(${num}): ${cache[num]} is in cache! --`);
            result.push(cache[num]);
            continue;
        }

        let divisorCount = 0;
        for (let j = 1; j * j <= num; j++) {
            if (num % j === 0) {
                divisorCount += numCountArr[j];
                if (j * j !== num) divisorCount += numCountArr[num / j];
            }
        }
        
        const nonDivisorCount = N - divisorCount;
        cache[num] = nonDivisorCount; // 결과 기억해두기
        result.push(nonDivisorCount);
        console.log(`cache: ${JSON.stringify(cache)}`);
    }

    return result;
}