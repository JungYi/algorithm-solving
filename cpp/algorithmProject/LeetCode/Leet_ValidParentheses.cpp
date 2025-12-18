/*
 * Leet_ValidParentheses.cpp
 *           #Valid Parentheses
 *
 * Author: JungYi Bae
 * Date  : 2025-11-18
 * URL   : https://leetcode.com/problems/valid-parentheses/description/
 *
 */

//Valid Parentheses
#include <iostream>
#include <stack>

using namespace std;

bool isValid(string s) {
    stack<char> brackets;
    
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[')
            brackets.push(c);
        else {
            if (brackets.empty())
                return false;
            
            //if ((top == '(' && c == ')') || (top == '{' && c == '}') || (top == '[' && c == ']'))
            if (c == ')' && brackets.top() == '(')
                brackets.pop();
            else if (c == '}' && brackets.top() == '{')
                brackets.pop();
            else if (c == ']' && brackets.top() == '[')
                brackets.pop();
            else
                return false;
        }
    }
    
    if (!brackets.empty())
        return false;
    
    return true;
}

int main() {
//    string s = "()";
//    string s = "()[]{}";
    string s = "(]";
//    string s = "([])";
//    string s = "([)]";
    
    cout << isValid(s);

    return 0;
}
