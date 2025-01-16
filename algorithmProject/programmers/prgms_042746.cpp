/*
 * prgms_042746.cpp
 *           #042746. 가장 큰 수
 *
 * Author: JungYi Bae
 * Date  : 2025-01-13
 * URL   : https://school.programmers.co.kr/learn/courses/30/lessons/42746
 *
 */

//042746. 가장 큰 수
#include <string>
#include <vector>
#include <iostream>

using namespace std;

bool compare(string a, string b) {
    cout << endl;
    cout << "a: " << a << " b: " << b << endl;
    cout << "a+b: " << a+b << " b+a: " << b+a << endl;
    
    if(stoll(a+b) > stoll(b+a)) {
        cout << "---yes---" << endl;
        cout << "stoll(a+b): " << stoll(a+b) << " > stoll(b+a): " << stoll(b+a) << endl;
        
        return 1;
    }
    else {
        cout << "---no---" << endl;
        cout << "stoll(a+b): " << stoll(a+b) << " <= stoll(b+a): " << stoll(b+a) << endl;
        
        return 0;
    }
}

string solutionOthers(vector<int> numbers) {
    string answer = "";
    vector<string> words;
    
    for(int i=0; i < numbers.size(); i++)
        words.push_back(to_string(numbers[i]));
    
    for(auto& i : words)
        cout << i << '\n';
    
    sort(words.begin(), words.end(), compare);
    
    for(int i=0; i < words.size(); i++)
        answer += words[i];
    
    if(answer[0] == '0')
        answer = "0";
    
    return answer;
}

string solution(vector<int> numbers) {
    string answer = "";
    return answer;
}

int main() {
//    vector<int> numbers {6, 10, 2};
//    vector<int> numbers {3, 30, 34, 5, 9};
    vector<int> numbers {34, 3, 30, 34, 1, 2, 9, 345};
    
    //cout << solution(numbers) << endl;
    cout << solutionOthers(numbers) << endl;
    
    return 0;
}
