/*
 * Leet_ValidPalindrome.cpp
 *           #Valid Palindrome
 *
 * Author: JungYi Bae
 * Date  : 2025-11-12
 * URL   : https://leetcode.com/problems/valid-palindrome/description/
 *
 */

//Valid Palindrome
#include <iostream>
#include <vector>

using namespace std;

bool isPalindrome(string s) {
    string pString;
    for (char c : s) {
        if (isalnum(c)) {
            pString.push_back(tolower(c));
        }
    }
    
    if (pString == "")
        return true;
    
    for (int i = 0; i < pString.size()/2; i++) {
        if (pString[i] != pString[pString.size()-1-i]) {
            return false;
        }
    }
    
    /**
    int L = 0, R = pString.size() - 1;
    while (L < R) {
        if (pString[L] != pString[R]) {
            return false;
        }
        L++; R--;
    }*/
    
    return true;
}

int main() {
    //string s = "A man, a plan, a canal: Panama";
    string s = "race a car";
    //string s = " ";
    
    isPalindrome(s);
    
    return 0;
}
