// const root = [3,9,20,null,null,15,7];
const root = [1,2,2,3,4,4,3,5,6,7,8,8,9,6,5];
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
var maxDepth = function(root) {
    console.log(`Visiting Node: ${root ? root.val : 'null'}`);
    if (!root) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    console.log(`Node Value: ${root.val}, Left Depth: ${leftDepth}, Right Depth: ${rightDepth}`);
    
    return 1 + Math.max(leftDepth, rightDepth);
};

console.log(`maxDepth(root): ${maxDepth(rootTree)}`);

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