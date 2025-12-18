/*
 * Leet_ZigzagConversion.cpp
 *           #Zigzag Conversion
 *
 * Author: JungYi Bae
 * Date  : 2025-10-10
 * URL   : https://leetcode.com/problems/zigzag-conversion/description/
 *
 */

//Zigzag Conversion
#include <iostream>
#include <vector>

using namespace std;

string convert(string s, int numRows) {
    string answer;
    vector<string> row(numRows);
    int dir = 1;
    int now = 0;
    
    if (numRows == 1)
        return s;
    
    for (int i = 0; i < s.size(); i++) {
        if (now == 0)
            dir = 1;
        else if (now == numRows-1)
            dir = -1;
        
        row[now].push_back(s[i]);
        
        now += dir;
    }
    
    for (int i = 0; i < numRows; i++)
        answer += row[i];
    
//    cout << answer << '\n';
//    for (auto& i : row)
//        cout << i << '\n';
    
    return answer;
}

int main() {
//    string s = "PAYPALISHIRING"; int numRows = 3;
//    string s = "PAYPALISHIRING"; int numRows = 4;
//    string s = "A"; int numRows = 1;
    string s = "AB"; int numRows = 1;

    cout << convert(s, numRows) << endl;

    return 0;
}
