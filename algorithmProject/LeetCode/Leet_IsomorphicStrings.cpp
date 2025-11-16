/*
 * Leet_IsomorphicStrings.cpp
 *           #Isomorphic Strings
 *
 * Author: JungYi Bae
 * Date  : 2025-11-16
 * URL   : https://leetcode.com/problems/isomorphic-strings/description/
 *
 */

//Isomorphic Strings
#include <iostream>

using namespace std;

bool isIsomorphic(string s, string t) {
    int s2t[128] = {0};
    int t2s[128] = {0};
    
    for (int i = 0; i < s.size(); i++) {
        int sChar = (int)s[i];
        int tChar = (int)t[i];
        cout << "! sChar:" << s[i] <<  "("<< sChar << "), tChar: " << t[i] << "(" << tChar << ")" << '\n';
        
        if (s2t[sChar] == 0 && t2s[tChar] == 0) {
            s2t[sChar] = tChar;
            t2s[tChar] = sChar;
            
            cout << "s2t[sChar] = tChar;" << '\n';
            cout << "---s2t["<< sChar << "] = "<< t[i] << '\n';
            cout << "t2s[tChar] = sChar;" << '\n';
            cout << "---t2s["<< tChar << "] = "<< s[i] << '\n';
        }
        else {
            if (s2t[sChar] != tChar || t2s[tChar] != sChar)
                return false;
        }
    }
    
    return true;
}

int main() {
//    string s = "egg", t = "add";
    string s = "foo", t = "bar";
//    string s = "paper", t = "title";
//    string s = "badc", t = "baba";
    
    cout << isIsomorphic(s, t);

    return 0;
}
