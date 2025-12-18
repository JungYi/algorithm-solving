/*
 * Leet_MinimumAbsoluteDifferenceinBST.cpp
 *           #Minimum Absolute Difference in BST
 *
 * Author: JungYi Bae
 * Date  : 2025-11-23
 * URL   : https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
 *
 */

//Minimum Absolute Difference in BST
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

int prevVal;
bool hasPrev = false;
int answer = 100001;
void DFS(TreeNode* node, int depth) {
    if (node == nullptr) return;
    
    DFS(node->left, depth+1);
    
    cout << "[depth: " << depth << "] val -----> " << node->val<< '\n';
    
    if (hasPrev) {
        cout << "min !! answer: " << answer << ", node: " << node->val << ", min: " << min(answer, (node->val)-prevVal)<< '\n';
        answer = min(answer, (node->val)-prevVal);
    }
    prevVal = node->val;
    hasPrev = true;
    
    DFS(node->right, depth+1);
}
int getMinimumDifference(TreeNode* root) {
    hasPrev = false;
    answer = 100001;
    
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
//    int v1=1, v2=2, v3=3, v6=6, v4=4;
//    vector<int*> input = {&v4, &v2, &v6, &v1, &v3, nullptr, nullptr};
    int v1=1, v0=0, v48=48, v12=12, v49=49;
    vector<int*> input = {&v1, &v0, &v48, nullptr, nullptr, &v12, &v49};
    
    TreeNode* root = buildTreeFromArray(input);
    
    getMinimumDifference(root);
    
    deleteTree(root);
    
    return 0;
}
