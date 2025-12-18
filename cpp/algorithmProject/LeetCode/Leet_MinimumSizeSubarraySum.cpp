/*
 * Leet_MinimumSizeSubarraySum.cpp
 *           #Minimum Size Subarray Sum
 *
 * Author: JungYi Bae
 * Date  : 2025-11-13
 * URL   : https://leetcode.com/problems/minimum-size-subarray-sum/description/
 *
 */

//Minimum Size Subarray Sum
#include <iostream>
#include <vector>

using namespace std;

int minSubArrayLen(int target, vector<int>& nums) {
    int size = (int)nums.size();
    int answer = 100001;
    int sum = 0;
    int L = 0;
    
    for (int R = 0; R < size; R++) {
        sum += nums[R];
        cout << "--L:["<< L << "]--R:["<< R << "], sum:" << sum << '\n';
        
        // 조건을 만족할 때마다 왼쪽을 줄여서 최소 길이 찾기
        while (sum >= target) {
            int length = R - L + 1;
            answer = min(answer, length);
            cout << "YES!!! length : "<< length << '\n';

            sum -= nums[L];
            L++;
        }
    }
    
    if (answer == 100001)
        return 0;
    
    return answer;
}

int main() {
    //int target = 7; vector<int> nums = {2,3,1,2,4,3};
    //int target = 4; vector<int> nums = {1,4,4};
    //int target = 11; vector<int> nums = {1,1,1,1,1,1,1,1};
    //int target = 11; vector<int> nums = {1,2,3,4,5};
    int target = 6; vector<int> nums = {10,2,3};
    
    minSubArrayLen(target, nums);
    
    return 0;
}
