// const root = [1,2,2,3,4,4,3];
// const root = [1,2,2,null,3,null,3];
// const root = [1,2,2,3,4,5,3];
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    console.log(root);
    if (!root) return true;

    const isMirror = (t1, t2) => {
        // ?. 연산자를 써서 null일 경우 에러 대신 undefined가 나오게 합니다.
        console.log(`Comparing: [L: ${t1?.val ?? 'null'}] vs [R: ${t2?.val ?? 'null'}]`);

        if (!t1 && !t2) {
            console.log("Both null, Pass!");
            return true;
        }
        
        if (!t1 || !t2 || t1.val !== t2.val) {
            console.log(`🚨 Fail! L: ${t1?.val}, R: ${t2?.val}`);
            return false;
        }

        console.log(`  -> Match! Checking children... (L.left, R.right) && (L.right, R.left)`);
        
        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    };

    return isMirror(root.left, root.right);
};

console.log(`isSymmetric(root): ${isSymmetric(rootTree)}`);

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