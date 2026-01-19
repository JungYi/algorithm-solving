const root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22;
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const resultArr = [];
    const pathArr = [];
    
    if (!root) return [];

    const findPath = (node, remainingSum) => {
        if (!node) return;

        pathArr.push(node.val);

        console.log(`Visiting Node: ${node ? node.val : 'null'}, remainingSum: ${remainingSum}, (Left Node: ${node?.left?.val ?? 'null'}, Right Node: ${node?.right?.val ?? 'null'})`);
        console.log(`pathArr: ${pathArr}`);
        
        if (!node.left && !node.right) { // 자식이 없으면
            if (remainingSum === node.val) {
                /**
                 * pathArr     : 배열 그 자체를 가리키는 '주소(참조)'
                 * ...pathArr  : 배열 안에 있는 내용물(숫자들)만
                 * [...pathArr]: 뽑아낸 내용물들을 가지고 새로운 배열을 만드는 것
                 */
                // resultArr.push(pathArr) // resultArr에는 데이터가 아니라 pathArr로 가는 '주소'가 저장
                resultArr.push([...pathArr]);
                // "나중에 pathArr가 pop()으로 변하더라도, 내가 지금 찾은 이 경로는 따로 안전하게 보관하겠다"라는 스냅샷 기능
                console.log(`Its here`);
            }

            console.log(`  '!node.left && !node.right' means No left or right child. This is a leaf node!`);
        } else { // 자식이 있다면 계속 탐색
            findPath(node.left, remainingSum-node.val);
            findPath(node.right, remainingSum-node.val);

            console.log(`--Node Value: ${node.val}, remainingSum: ${remainingSum}`);
        }

        pathArr.pop();
    }
    findPath(root, targetSum);
    
    return resultArr;
};

console.log(`pathSum(root, targetSum): ${pathSum(rootTree, targetSum)}`);

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