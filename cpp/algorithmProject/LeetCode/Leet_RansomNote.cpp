/*
 * Leet_RansomNote.cpp
 *           #Ransom Note
 *
 * Author: JungYi Bae
 * Date  : 2025-11-16
 * URL   : https://leetcode.com/problems/ransom-note/description/
 *
 */

//Ransom Note
#include <iostream>

using namespace std;

bool canConstruct(string ransomNote, string magazine) {
    int magAlphabet[26] = {0};
    int ranAlphabet[26] = {0};
    
    for (int i = 0; i < magazine.size(); i++)
        magAlphabet[magazine[i] - 'a']++;
    for (int i = 0; i < ransomNote.size(); i++)
        ranAlphabet[ransomNote[i] - 'a']++;
    
    for (int i = 0; i < 26; i++)
        if (magAlphabet[i] < ranAlphabet[i])
            return false;
    
    return true;
}

bool canConstructOthers(string ransomNote, string magazine) {
    int alphabet[26] = {0};
    
    for (char c : magazine)
        alphabet[c - 'a']++; // c = magazine[i];
    
    /**
    for (int i = 0; i < ransomNote.size(); i++) {
        alphabet[ransomNote[i] - 'a']--;
        if (alphabet[ransomNote[i] - 'a'] < 0) return false;
    }
     */
    for (char c : ransomNote) {
        alphabet[c - 'a']--;
        if (alphabet[c - 'a'] < 0) return false;
    }
    
    return true;
}

int main() {
    //string ransomNote = "a", magazine = "b";
    //string ransomNote = "aa", magazine = "ab";
    //string ransomNote = "aa", magazine = "aab";
    string ransomNote = "aab", magazine = "baa";
    
    cout << canConstruct(ransomNote, magazine);

    return 0;
}
