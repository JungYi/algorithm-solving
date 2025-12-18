/*
 * Leet_BinaryTreeRightSideView.cpp
 *           #Binary Tree Right Side View
 *
 * Author: JungYi Bae
 * Date  : 2025-11-22
 * URL   : https://leetcode.com/problems/binary-tree-right-side-view/description/
 *
 */

//Binary Tree Right Side View
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

vector<int> answer;
void DFS(TreeNode* node, int depth) {
    if (node == nullptr) return;
    
    cout << "depth: " << depth << " , val: " << node->val<< '\n';
    if (depth == answer.size()) {
        cout << "depth == answer.size() !!" << depth << " , val: " << node->val<< '\n';
        answer.push_back(node->val);
    }
    
    DFS(node->right, depth+1);
    DFS(node->left, depth+1);
}
vector<int> rightSideView(TreeNode* root) {
    answer.clear();
    
    DFS(root, 0);
    
    return answer;
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
    int v1=1, v2=2, v3=3, v5=5, v4=4;
    vector<int*> input = {&v1, &v2, &v3, nullptr, &v5, nullptr, &v4};
//    int v1=1, v2=2, v3=3, v4=4, v5=5;
//    vector<int*> input = {&v1, &v2, &v3, &v4, nullptr, nullptr, nullptr, &v5};
    
    TreeNode* root = buildTreeFromArray(input);
    
    rightSideView(root);
    
    deleteTree(root);
    
    return 0;
}
