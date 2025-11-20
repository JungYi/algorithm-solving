/*
 * Leet_MaximumDepthofBinaryTree.cpp
 *           #Maximum Depth of Binary Tree
 *
 * Author: JungYi Bae
 * Date  : 2025-11-20
 * URL   : https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 */

//Maximum Depth of Binary Tree
#include <iostream>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
int maxDepth(TreeNode* root) {
    if (root == nullptr) return 0;
    
    int left = maxDepth(root->left);
    int right = maxDepth(root->right);
    
    cout << "--L:["<< left << "]--R:["<< right << "], max:" << max(left, right) << '\n';
    
    return 1+max(left, right);
}

// LeetCode 스타일 배열/벡터 입력을 C++ 트리 구조로 변환하는 함수
TreeNode* buildTreeFromArray(const vector<int*>& input) {
    if (input.empty() || input[0] == nullptr)
        return nullptr;

    TreeNode* root = new TreeNode(*input[0]);
    queue<TreeNode*> q;
    q.push(root);

    int i = 1;
    while (i < input.size() && !q.empty()) {
        TreeNode* current = q.front();
        q.pop();

        // 왼쪽 자식 처리
        if (i < input.size() && input[i] != nullptr) {
            current->left = new TreeNode(*input[i]);
            q.push(current->left);
        }
        i++;

        // 오른쪽 자식 처리
        if (i < input.size() && input[i] != nullptr) {
            current->right = new TreeNode(*input[i]);
            q.push(current->right);
        }
        i++;
    }
    cout << root->val << " ";
    
    return root;
}
// 트리 메모리 해제 함수
void deleteTree(TreeNode* root) {
    if (root == nullptr) return;
    deleteTree(root->left);
    deleteTree(root->right);
    delete root;
}

int main() {
    int v3=3, v9=9, v20=20, v15=15, v7=7;
    vector<int*> input = {&v3, &v9, &v20, nullptr, nullptr, &v15, &v7}; // root = [3, 9, 20, null, null, 15, 7]
//    int v1=1, v2=2;
//    vector<int*> input = {&v1, nullptr, &v2}; // root = [1, null, 2]
    
    TreeNode* root = buildTreeFromArray(input);
    
    maxDepth(root);
    
    deleteTree(root);
    
    return 0;
}
