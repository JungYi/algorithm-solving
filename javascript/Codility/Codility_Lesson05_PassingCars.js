// const A = [0,1,1];
// const A = [0,1,0,1,1];
// const A = [0,0,0,1,0,1,0]; // 3+4
const A = [0,0,0,1,0,1,1]; // 3+4+4
// const A = [0,0,0,1,0,1,0,0,0,1];

console.log(solution(A));
//console.log(solutionOthers(A));

function solution(A) {
    if (A.length === 1) return 0;

    let zeroCounts = 0;
    let passingCars = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            zeroCounts++;
        }
        else {
            passingCars += zeroCounts;
            if (passingCars > 1000000000) return -1;
        }

        console.log('i: '+i+', A[i]: '+A[i]+', zeroCounts: '+zeroCounts+', passingCars: '+passingCars);
    }
    return passingCars;
}