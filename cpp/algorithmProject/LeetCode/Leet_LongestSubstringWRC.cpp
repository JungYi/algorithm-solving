/*
 * Leet_LongestSubstringWRC.cpp
 *           #Longest Substring Without Repeating Characters
 *
 * Author: JungYi Bae
 * Date  : 2025-10-08
 * URL   : https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 */

//Longest Substring Without Repeating Characters
#include <iostream>
#include <unordered_set>

using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_set<char> subString;
    int answer = 0;
    int L = 0;
    
    for (int R = 0; R < s.length(); R++) {
        char nextChar = s[R];
        while (subString.count(nextChar)) {
            subString.erase(s[L]);
            L++;
        }
        subString.insert(nextChar);
        answer = max(answer, R-L+1);
    }
    return answer;
}

int main() {
//    string s = "abcabcbb";
//    string s = "bbbbb";
//    string s = "pwwkew";
//    string s = "abcacdfeb";
    string s = " ";

    cout << lengthOfLongestSubstring(s) << endl;

    return 0;
}
