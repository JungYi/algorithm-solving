/*
 * Leet_RemoveElement.cpp
 *           #Remove Element
 *
 * Author: JungYi Bae
 * Date  : 2025-11-11
 * URL   : https://leetcode.com/problems/remove-element/description/
 *
 */

//Remove Element
#include <iostream>
#include <vector>

using namespace std;

int removeElement(vector<int>& nums, int val) {
    int answer = int(nums.size());
    
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] == val) {
            answer--;
            nums.erase(nums.begin() + i);
            i--;
        }
    }
    
    return answer;
}

int removeElementOthers(vector<int>& nums, int val) {
    int pos = 0;
    for (int i = 0; i < nums.size(); ++i) {
        if (nums[i] != val) {
            cout << "pos: " << pos << ", i: " << i << '\n';
            nums[pos] = nums[i];
            pos++;
            for (auto& i : nums)
                cout << i << ' ';
            cout << "pos -> " << pos << '\n';
        }
    }
    
    return pos;
}

int main() {
    //vector<int> nums = {3,2,2,3}; int val = 3;
    //vector<int> nums = {0,1,2,2,3,0,4,2}; int val = 2;
    //vector<int> nums = {2,2,2,2,2,2,2,2}; int val = 2;
    vector<int> nums = {0,1,2,2,2,2,2,2}; int val = 2;
    
    //cout << "answer -> " << removeElement(nums, val) << '\n';
    //removeElement(nums, val);
    removeElementOthers(nums, val);
    
    return 0;
}
