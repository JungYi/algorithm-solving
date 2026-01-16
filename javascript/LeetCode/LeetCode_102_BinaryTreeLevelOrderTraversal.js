const root = [3,9,20,null,null,15,7];
// const root = [1,2,2,3,4,4,3];
// const root = [1,2,2,null,3,null,3];
// const root = [1,2,2,3,4,5,3];
// const root = [1,2,2,3,4,4,3,5,6,7,8,8,9,6,5];
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    console.log(root);
    if (!root) return [];

    let count = 0;
    const result = [];
    const queue = [root];

    // 2. 줄에 사람이 있는 동안 계속 반복!
    while (queue.length > 0) {
        // const currentNode = queue.shift();
        // 1. [지독한 핵심] 현재 층에 몇 명이 있는지 "스냅샷"을 찍습니다.
        let levelSize = queue.length; 
        let currentLevel = []; // 이번 층의 사람들을 담을 바구니

        count++;
        /**
        console.log(`Visited: ${currentNode.val}, Current count: ${count}`);
        
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        
        console.log(`Queue state: [${queue.map(node => node.val).join(', ')}]`);
         */
        
        // 2. 딱 'levelSize'만큼만 반복해서 꺼냅니다.
        // for (let i = 0; i < queue.length; i++) { // X
        // 자식들이 queue.push로 계속 들어오면 queue.length가 실시간으로 늘어남.
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            console.log(`  Processing Node: ${node.val}`);
            
            if (node.left) queue.push(node.left); // 자식들은 큐의 '맨 뒤'에 넣습니다. 
            if (node.right) queue.push(node.right); // (이들은 다음번 while 루프의 levelSize가 될 겁니다.)
        }

        // 3. 한 층이 끝났으니 결과지에 기록!
        result.push(currentLevel);
        console.log(`Completed Level ${count}: [${currentLevel.join(', ')}]`);
    }

    return result;
};

console.log(`levelOrder(root): ${levelOrder(rootTree)}`);

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