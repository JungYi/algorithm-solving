/*
 * Leet_MergeSortedArray.cpp
 *           #Merge Sorted Array
 *
 * Author: JungYi Bae
 * Date  : 2025-10-29
 * URL   : https://leetcode.com/problems/merge-sorted-array/description/
 *
 */

//Merge Sorted Array
#include <iostream>
#include <vector>

using namespace std;

void mergeSA(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    int p1 = m - 1;
    int p2 = n - 1;
    int now = m + n - 1;
    
//    if (m == 0) {
//        nums1 = nums2;
//        return;
//    }
    
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] >= nums2[p2]) {
            nums1[now] = nums1[p1];
            now--;
            p1--;
        }
        else {
            nums1[now] = nums2[p2];
            now--;
            p2--;
        }
    }
    
    while (p2 >= 0) {
        nums1[now] = nums2[p2];
        now--;
        p2--;
    }
    
    for (auto& i : nums1)
        cout << i << '\n';
    
    return;
}

int main() {
//    vector<int> nums1 = {1,2,3,0,0,0};
//    vector<int> nums2 = {2,5,6};
//    int m = 3, n = 3;
    
    vector<int> nums1 = {2,0};
    vector<int> nums2 = {1};
    int m = 1, n = 1;

    mergeSA(nums1, m, nums2, n);

    return 0;
}
