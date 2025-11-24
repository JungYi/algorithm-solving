/*
 * Leet_KthSmallestElementinaBST.cpp
 *           #Kth Smallest Element in a BST
 *
 * Author: JungYi Bae
 * Date  : 2025-11-24
 * URL   : https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
 *
 */

//Kth Smallest Element in a BST
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

int cnt = 0;
int answer;
void DFS(TreeNode* node, int k) {
    if (node == nullptr) return;
    
    DFS(node->left, k);
    
    cnt++;
    cout << "[cnt: " << cnt << "] val -----> " << node->val<< '\n';
    if (cnt == k) {
        answer = node->val;
        cout << "min !! answer: " << answer << ", node: " << node->val << '\n';
        return;
    }
    
    DFS(node->right, k);
}
bool DFSOthers(TreeNode* node, int k) {
    if (node == nullptr) return false;
    
    if (DFSOthers(node->left, k)) return true;
    
    cnt++;
    cout << "[cnt: " << cnt << "] val -----> " << node->val<< '\n';
    if (cnt == k) {
        answer = node->val;
        cout << "min !! answer: " << answer << ", node: " << node->val << '\n';
        return true;
    }
    
    return DFSOthers(node->right, k);
}
int kthSmallest(TreeNode* root, int k) {
    //DFS(root, k);
    DFSOthers(root, k);
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
//    int v1=1, v0=0, v48=48, v12=12, v49=49;
//    vector<int*> input = {&v1, &v0, &v48, nullptr, nullptr, &v12, &v49};
//    int v1=1, v2=2, v3=3, v4=4, k=1;
//    vector<int*> input = {&v3, &v1, &v4, nullptr, &v2};
    int v1=1, v2=2, v3=3, v4=4, v5=5, v6=6, k=3;
    vector<int*> input = {&v5, &v3, &v6, &v2, &v4, nullptr, nullptr, &v1};
    
    TreeNode* root = buildTreeFromArray(input);
    
    kthSmallest(root, k);
    
    deleteTree(root);
    
    return 0;
}
