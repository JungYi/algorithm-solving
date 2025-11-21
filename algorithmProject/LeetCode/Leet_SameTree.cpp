/*
 * Leet_SameTree.cpp
 *           #Same Tree
 *
 * Author: JungYi Bae
 * Date  : 2025-11-21
 * URL   : https://leetcode.com/problems/same-tree/description/
 *
 */

//Same Tree
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
bool isSameTree(TreeNode* p, TreeNode* q) {
    if (p == nullptr && q == nullptr) return true;
    
    if (p == nullptr || q == nullptr) return false;
    
    if (p->val != q->val) return false;
    
    return isSameTree(p->left, q->left) && isSameTree(p->right, q->right) ;
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
    int p1=1, p2=2, p3=3;
    vector<int*> input1 = {&p1, &p2, &p3};
    int q1=1, q2=2, q3=4;
    vector<int*> input2 = {&q1, &q2, &q3};
//    int p1=1, p2=2;
//    vector<int*> input1 = {&p1, &p2, nullptr};
//    int q1=1, q2=2;
//    vector<int*> input2 = {&q1, nullptr, &q2};
    
    TreeNode* p = buildTreeFromArray(input1);
    TreeNode* q = buildTreeFromArray(input2);
    
    cout << isSameTree(p,q);
    
    deleteTree(p);
    deleteTree(q);
    
    return 0;
}
