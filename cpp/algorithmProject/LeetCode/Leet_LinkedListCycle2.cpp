/*
 * Leet_LinkedListCycle2.cpp
 *           #Linked List Cycle II
 *
 * Author: JungYi Bae
 * Date  : 2025-11-19
 * URL   : https://leetcode.com/problems/linked-list-cycle-ii/description/
 *
 */

//Linked List Cycle II
#include <iostream>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
ListNode *detectCycle(ListNode *head) {
    if (head == nullptr) return head;
    
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        
        cout << "slow: " << slow->val << endl;
        cout << "fast: " << fast->val << endl;
        cout << "-------" << endl;
        
        if (slow == fast) {
            ListNode* newHead = head;
            ListNode* newPoint = slow;
            
            cout << "newHead: " << newHead->val << endl;
            cout << "newPoint: " << newPoint->val << endl;
            cout << "=====" << endl;
            
            while (newHead != newPoint) {
                newHead = newHead->next;
                newPoint = newPoint->next;
                
                cout << "newHead: " << newHead->val << endl;
                cout << "newPoint: " << newPoint->val << endl;
                cout << "------->>>" << endl;
            }
            
            return newHead;
        }
    }
    
    return nullptr;
}

int main() {
    ListNode* head = new ListNode(3);
    ListNode* second = new ListNode(2);
    ListNode* third = new ListNode(0);
    ListNode* fourth = new ListNode(-4);
    ListNode* fifth = new ListNode(1);
    ListNode* sixth = new ListNode(5);
    
    head->next = second;
    second->next = third;
    third->next = fourth;
    fourth->next = fifth;
    fifth->next = sixth;
    sixth->next = fourth;
    
    detectCycle(head);
    
    delete head;
    delete second;
    delete third;
    delete fourth;
    delete fifth;
    delete sixth;

    return 0;
}
