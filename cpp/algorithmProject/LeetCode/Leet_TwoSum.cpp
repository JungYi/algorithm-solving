/*
 * Leet_TwoSum.cpp
 *           #Two Sum
 *
 * Author: JungYi Bae
 * Date  : 2025-10-05
 * URL   : https://leetcode.com/problems/two-sum/description/
 *
 */

//Two Sum
#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> m;
    vector<int> answer;
    m.insert({nums[0], 0});
    
    for (int i=1; i < nums.size(); i++) {
        if (m.count(target - nums[i])) {
            answer.push_back(m[target - nums[i]]);
            answer.push_back(i);
            
            return answer;
        }
        
        m[nums[i]] = i;
    }
    
    return {};
}

int main() {
    vector<int> nums = {2,7,11,15};
    int target = 9;

    cout << "[" << twoSum(nums, target)[0] << ", " << twoSum(nums, target)[1] << "]" << endl;

    return 0;
}
