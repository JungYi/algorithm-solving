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

    const result = [];
    // const queue = [root];


    if (!root) return 0; // 나무가 없으면 0개

    let count = 0;
    // 1. Queue(대기줄) 준비: 처음에 루트 노드를 넣습니다.
    const queue = [root];

    // 2. 줄에 사람이 있는 동안 계속 반복!
    while (queue.length > 0) {
        // 줄 맨 앞의 노드를 꺼냅니다.
        const currentNode = queue.shift();
        
        // [작업 수행] 노드를 하나 만났으니 카운트 증가!
        count++;
        console.log(`Visited: ${currentNode.val}, Current count: ${count}`);

        // 3. 꺼낸 노드의 자식들이 있다면 줄을 세웁니다.
        // 왼쪽 자식 줄 서!
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        // 오른쪽 자식 줄 서!
        if (currentNode.right) {
            queue.push(currentNode.right);
        }

        console.log(`Queue state: [${queue.map(node => node.val).join(', ')}]`);
    }

    return count;
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