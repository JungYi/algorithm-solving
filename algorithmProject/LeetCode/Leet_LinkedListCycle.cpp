/*
 * Leet_LinkedListCycle.cpp
 *           #Linked List Cycle
 *
 * Author: JungYi Bae
 * Date  : 2025-11-19
 * URL   : https://leetcode.com/problems/linked-list-cycle/description/
 *
 */

//Linked List Cycle
#include <iostream>

using namespace std;

// Node 구조체 정의
//struct Node {
//    int data;        // 데이터를 저장할 변수
//    Node* link;      // 다음 노드를 가리킬 포인터 변수
//    
//    // 생성자: 노드를 생성할 때 데이터와 다음 노드를 초기화
//    Node(int val) {
//        data = val;
//        link = NULL; // 처음에는 다음 노드가 없으므로 NULL로 설정
//    }
//};

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
bool hasCycle(ListNode *head) {
    cout << "1번째 노드: " << head->val << endl; // 출력: 첫 번째 노드: 10
    cout << "2번째 노드: " << head->next->val << endl; // 출력: 두 번째 노드: 20
    cout << "3번째 노드: " << head->next->next->val << endl;
    cout << "4번째 노드: " << head->next->next->next->val << endl;
    cout << "5번째 노드: " << head->next->next->next->next->val << endl;
    cout << "6번째 노드: " << head->next->next->next->next->next->val << endl;
    cout << "7번째 노드: " << head->next->next->next->next->next->next->val << endl;
    cout << "8번째 노드: " << head->next->next->next->next->next->next->next->val << endl;
    cout << "9번째 노드: " << head->next->next->next->next->next->next->next->next->val << endl;
    
    if (head == nullptr) return false;
    
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        
        if (slow == fast)
            return true;
    }
    
    return false;
}

int main() {
    // 노드 생성 예시
    ListNode* head = new ListNode(3); // 데이터가 10인 첫 번째 노드 생성
    ListNode* second = new ListNode(2); // 데이터가 20인 두 번째 노드 생성
    ListNode* third = new ListNode(0);
    ListNode* fourth = new ListNode(-4);
    
    // 노드 연결
    head->next = second; // 첫 번째 노드의 link를 두 번째 노드로 연결
    second->next = third;
    third->next = fourth;
    fourth->next = second;
    
    cout << hasCycle(head);
    
    // 메모리 해제 (주의: 간단한 예시이므로 실제 구현 시에는 관리 필요)
    delete head;
    delete second;
    delete third;
    delete fourth;

    return 0;
}
