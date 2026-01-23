// const root = [1,2,3,4,5,6];
// const root = [3,9,20,null,null,15,7]; // Given the root of a complete binary tree
// all nodes in the last level are as far left as possible.
const root = [1, 2,2, 3,4,4,3, 5,6,7,8,8,9,6,5];
const rootTree = arrayToTree(root);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodesPractice = function(root) {
    if (!root) return 0;

    let level = 0;
    // 큐는 느리니까 while로 
    // const queue = [root];
    // while (queue.length > 0) {
    //     level++;
    //     const node = queue.shift();
    //     if (node.left) queue.push(node.left);
    // }
    let node = root;
    while (node) {
        level++;
        node = node.left;
    }

    // 마지막 레벨 직전까지의 개수
    // const nodesBeforeLastCount = (2 ** (level-1)) - 1;
    const nodesBeforeLastCount = Math.pow(2, level-1) - 1;

    console.log(nodesBeforeLastCount);

    let left = 0;
    let right = nodesBeforeLastCount;
    let nodesLastLevelCount = 0;

    while (left <= right) {
        // const mid = Math.floor((left+right)/2);
        const mid = left + Math.floor((right-left)/2);

        // exists 로직: mid번 칸에 노드가 있나?
        // if (exists(mid)) left = mid+1;
        // else right = mid-1;

        // --- 내비게이션 로직 ---
        let n = root;
        let l = 0;
        //let r = right; // 변하는 값을 넣으면 안 되고, 고정된 전체 폭
        let r = nodesBeforeLastCount;

        // 점프는 '높이 - 1'번만 해야 바닥에 도착함
        // for (let i = 0; i < level; i++) {
        for (let i = 0; i < level - 1; i++) {
            let m = l + Math.floor((r-l)/2);

            if (mid <= m) {
                n = n.left;
                r = m;
            } else {
                n = n.right;
                l = m+1;
            }
        }

        if (n !== null) {
            nodesLastLevelCount = mid+1;
            left = mid+1;
        } else
            right = mid-1;
    }
    
    return nodesBeforeLastCount + nodesLastLevelCount;
};

console.log(`countNodesPractice(root): ${countNodesPractice(rootTree)}`);

var countNodesExplanation = function(root) {
    if (!root) return 0;
    // 왼쪽 다 세고, 오른쪽 다 세고, 나(1)를 더한다.
    return 1 + countNodes(root.left) + countNodes(root.right);
}

// 1. 트리 노드 정의
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 2. 배열을 트리 객체로 변환하는 함수 (BFS 활용)
function arrayToTree(arr) {
    if (!arr.length) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (i < arr.length) {
        const curr = queue.shift();
        if (arr[i] !== null) {
            curr.left = new TreeNode(arr[i]);
            queue.push(curr.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            curr.right = new TreeNode(arr[i]);
            queue.push(curr.right);
        }
        i++;
    }
    return root;
}