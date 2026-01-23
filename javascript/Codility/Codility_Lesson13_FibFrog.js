// const A = [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0];
const A = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

console.log(solution(A));
// console.log(solutionOthers(A));
// console.log(basicBFS());

function solution(A) {
    const getFibonacci = (N) => {
        // const fib = [0, 1];
        const fib = [1, 2];
        for (let i = 2; i < N; i++) {
            if (fib[i-1] + fib[i-2] <= N+1) fib.push(fib[i-1] + fib[i-2]);
            else break;
        }
        return fib;
    }

    const N = A.length;
    const fibArr = getFibonacci(N+1);
    console.log(`fibArr(${fibArr})`);

    let level = 0;
    const visitedArr = new Array(N+1).fill(false);
    const queue = [-1]; // possible frog pos
    // const queue = [{ pos: -1, step: 0 }]; // 위치와 점프 횟수를 함께 저장

    while (queue.length > 0) {
        level++;

        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const currentPos = queue.shift();
            console.log(`  Current position: ${currentPos}`);

            for (let jump of fibArr) {
                const nextPos = currentPos + jump;
                console.log(`     Next position: ${nextPos}`);

                if (nextPos === N) return level;
                if (nextPos > N) break;

                if (A[nextPos] === 1 && !visitedArr[nextPos]) {
                    visitedArr[nextPos] = true;
                    queue.push(nextPos);

                    console.log(`-----queue----->`);
                    console.log(queue);
                }
            }
        }
    }

    return -1;
}

function solutionOthers(A) {
    const N = A.length;
    
    // 1. 피보나치 생성 최적화 (Set을 써서 중복 제거 및 빠른 조회)
    const fibs = [1, 2];
    while (true) {
        const nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
        if (nextFib > N + 1) break;
        fibs.push(nextFib);
    }
    fibs.reverse(); // 큰 점프부터 시도하도록 역순 정렬

    const queue = [-1];
    const visited = new Array(N + 1).fill(false);
    let head = 0; // shift() 대신 쓸 포인터
    let level = 0;

    while (head < queue.length) {
        level++;
        let levelSize = queue.length - head;

        for (let i = 0; i < levelSize; i++) {
            const currentPos = queue[head++];

            for (const jump of fibs) {
                const nextPos = currentPos + jump;

                if (nextPos === N) return level;
                if (nextPos > N || nextPos < 0 || (nextPos < N && A[nextPos] === 0) || visited[nextPos]) {
                    continue;
                }

                visited[nextPos] = true;
                queue.push(nextPos);
            }
        }
    }
    return -1;
}

function solutionExplanation(A) {
    const getFibonacci = (N) => {
        const fib = [1, 2];
        for (let i = 2; i < N; i++) {
            if (fib[i-1] + fib[i-2] <= N+1) fib.push(fib[i-1] + fib[i-2]);
            else break;
        }
        return fib;
    }

    const N = A.length;
    const fibs = getFibonacci(N + 1);
    
    let queue = [{ pos: -1, step: 0 }]; // 2. 위치와 점프 횟수를 함께 저장
    let visited = new Array(N + 1).fill(false);

    while (queue.length > 0) {
        const { pos, step } = queue.shift();

        for (const jump of fibs) {
            const nextPos = pos + jump;

            if (nextPos === N) return step + 1;

            if (nextPos >= 0 && nextPos < N && A[nextPos] === 1 && !visited[nextPos]) {
                visited[nextPos] = true;
                queue.push({ pos: nextPos, step: step + 1 });
            }
        }
    }
    return -1;
}

/** BFS
 * 
 * "BFS(큐)"
 * Queue라는 바구니를 준비해서 루트 노드를 넣습니다.
 * 바구니에서 하나를 꺼내고,
 * 왼쪽, 오른쪽 자식을 다시 바구니에 넣습니다.
 * 바구니가 빌 때까지 반복
 * 이렇게 하면 트리를 "층별(Level)"로 훑게 됩니다.
 * 복잡한 재귀 없이 while 문 하나로 해결
 * 
 * 1. 큐 준비 (queue = [root])
 * 2. 줄에 사람 있는 동안 반복 (while(queue.length > 0))
 * 3. 지금 줄 선 사람 몇 명인지 체크 (levelSize = queue.length)
 * 4. 그만큼만 꺼내서 처리 (for(size) { node = queue.shift() })
 * 5. 꺼낸 김에 자식들 줄 세우기 (push(left), push(right))
 */
function basicBFS() {
    const targetPos = 10;
    const jumps = [1, 2, 4]; // 뛸 수 있는 거리
    
    const queue = [[0, 0]]; // Queue: [현재 위치, 점프 횟수]
    
    const visitedNode = new Set();
    visitedNode.add(0);

    while (queue.length > 0) {
        // 줄의 맨 앞사람을 꺼냅니다. (shift)
        const [currentParentNode, count] = queue.shift();
        console.log(`! shifted queue [현재 위치, 점프 횟수]: (${queue})`);
        
        if (currentParentNode === targetPos) return count;

        for (let jump of jumps) {
            let nextValue = currentParentNode + jump;
            console.log(`jump: ${jump}, currentParentNode: ${currentParentNode}, nextValue: ${nextValue}`);

            if (nextValue <= targetPos && !visitedNode.has(nextValue)) {
                visitedNode.add(nextValue);
                queue.push([nextValue, count + 1]); // 줄 세우기

                console.log(`-----visitedNode----->`);
                console.log(visitedNode);
                console.log(`--queue [현재 위치, 점프 횟수]: (${queue})`);
            }
        }
    }
    return -1;
}