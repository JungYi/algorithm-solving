const A = [1,5,2,1,4,0];

console.log(solution(A));

function solution(A) {
    const startArr = new Array(A.length);
    const endArr = new Array(A.length);

    let currentDisc = 0;
    let intersectionCounts = 0;
    let endIdx = 0;

    for (let i = 0; i < A.length; i++) {
        startArr[i] = i - A[i];
        endArr[i] = i + A[i];
    }

    startArr.sort((a,b) => a - b);
    endArr.sort((a,b) => a - b);

    for (let i = 0; i < A.length; i++) {
        console.log(`--->start: ${startArr[i]}, endIdx: ${endIdx}, currentDisc: ${currentDisc}, intersectionCounts: ${intersectionCounts}`);
        while (endArr[endIdx] < startArr[i]) {
            console.log(`  while: endArr[endIdx]: ${endArr[endIdx]} < startArr[i]: ${startArr[i]}`);
            currentDisc--;
            endIdx++;
            console.log(`  Adjusting for endArr: ${endArr[endIdx - 1]}, new currentDisc: ${currentDisc}`);
        }
        intersectionCounts += currentDisc;

        if (intersectionCounts > 10000000) return -1;

        currentDisc++;
        console.log(`<---start: ${startArr[i]}, endIdx: ${endIdx}, currentDisc: ${currentDisc}, intersectionCounts: ${intersectionCounts}`);
    }
    
    return intersectionCounts;
}