const root = [3,9,20,null,null,15,7];
// const root = [1,2,2,3,4,4,3,5,6,7,8,8,9,6,5];
// const root = [4,2,7,1,3,6,9];
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        console.log(`  Processing Node: ${node.val}`);

        const temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        console.log(`-----queue----->`);
        console.log(queue);
    }

    return root;
};

console.log(`invertTree(root): ${invertTree(rootTree)}`);

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