import java.util.*;

// 1. 트리 노드 정의
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class LeetCode_102_BinaryTreeLevelOrderTraversal {
    public List<List<Integer>> levelOrder(TreeNode root) {
        /** BFS
         * 1. 큐 준비 (queue = [root])
         * 2. 줄에 사람 있는 동안 반복 (while(queue.length > 0))
         * 3. 지금 줄 선 사람 몇 명인지 체크 (levelSize = queue.length)
         * 4. 그만큼만 꺼내서 처리 (for(size) { node = queue.shift() })
         * 5. 꺼낸 김에 자식들 줄 세우기 (push(left), push(right))
         * 
         * JS => Java
         * shift() => poll() (맨 앞 꺼내기)
         * push()  => add()  (맨 뒤 넣기)
         * length  => size() (현재 큐 크기)
         */
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> currentLevel = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                currentLevel.add(node.val);

                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }
            result.add(currentLevel);
        }
        return result;
    }
    
    // 2. 배열을 트리 객체로 변환하는 함수
    public static TreeNode arrayToTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int i = 1;
        while (i < arr.length) {
            TreeNode curr = queue.poll();
            if (i < arr.length && arr[i] != null) {
                curr.left = new TreeNode(arr[i]);
                queue.add(curr.left);
            } // 왼쪽 자식
            i++;
            if (i < arr.length && arr[i] != null) {
                curr.right = new TreeNode(arr[i]);
                queue.add(curr.right);
            } // 오른쪽 자식
            i++;
        }
        return root;
    }

    public static void main(String[] args) {
        LeetCode_102_BinaryTreeLevelOrderTraversal s = new LeetCode_102_BinaryTreeLevelOrderTraversal();
        Integer[] input = {3, 9, 20, null, null, 15, 7};
        TreeNode root = arrayToTree(input);
        // List<List<Integer>> output = s.levelOrder(root);
        System.out.println(s.levelOrder(root)); // [[3], [9, 20], [15, 7]]
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}