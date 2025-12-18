/*
 * Leet_SummaryRanges.cpp
 *           #Summary Ranges
 *
 * Author: JungYi Bae
 * Date  : 2025-11-17
 * URL   : https://leetcode.com/problems/summary-ranges/description/
 *
 */

//Summary Ranges
#include <iostream>
#include <vector>

using namespace std;

vector<string> summaryRanges(vector<int>& nums) {
    vector<string> answer;
    
    if (nums.size() == 0) {
        return answer;
    }
    if (nums.size() == 1) {
        answer.push_back(to_string(nums[0]));
        return answer;
    }
    
    int L = 0, R = 0;
    for (int i = 0; i < nums.size()-1; i++) {
        if (nums[i+1] == nums[i] + 1LL)
        //if (nums[i+1] == nums[i] + 1)
            R++;
        else {
            if (L == R)
                answer.push_back(to_string(nums[L]));
            else
                answer.push_back(to_string(nums[L])+"->"+to_string(nums[R]));
                
            L = R+1; R = R+1;
        }
    }
    
    if (R == nums.size()-1) {
        if (L == R)
            answer.push_back(to_string(nums[L]));
        else
            answer.push_back(to_string(nums[L])+"->"+to_string(nums[R]));
    }
    
    for (auto& i : answer)
        cout << i << '\n';
    
    return answer;
}

vector<string> summaryRangesOthers(vector<int>& nums) {
    vector<string> answer;
    if (nums.size() == 0) return answer;
    
    int index = 0;
    
    for (int i = 0; i < nums.size() - 1; i++) {
        //if (nums[i+1] != nums[i] + 1LL) {
        //if (nums[i+1] - nums[i] != 1) {
        if ((long long)nums[i+1] - (long long)nums[i] != 1) {
            if (index == i)
                answer.push_back(to_string(nums[index]));
            else
                answer.push_back(to_string(nums[index]) + "->" + to_string(nums[i]));
            
            index = i+1;
        }
    }

    if (index == nums.size()-1)
        answer.push_back(to_string(nums[index]));
    else
        answer.push_back(to_string(nums[index]) + "->" + to_string(nums[nums.size()-1]));

    return answer;
}

int main() {
//    vector<int> nums = {0,1,2,4,5,7};
    vector<int> nums = {0,2,3,4,6,8,9};
//    vector<int> nums = {0,2,3,4,6,8,9,10,11,12};
//    vector<int> nums = {1};
    
    summaryRanges(nums);

    return 0;
}
