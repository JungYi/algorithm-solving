/*
 * prgms_042840.cpp
 *           #042840. 모의고사
 *
 * Author: JungYi Bae
 * Date  : 2025-01-15
 * URL   : https://school.programmers.co.kr/learn/courses/30/lessons/42840
 *
 */

//042840. 모의고사
#include <iostream>
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> answers) {
    vector<int> answer;
    vector<int> num1Array {1, 2, 3, 4, 5};
    vector<int> num2Array {2, 1, 2, 3, 2, 4, 2, 5};
    vector<int> num3Array {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    
    vector<int> numAnswer {0, 0, 0};
    int max = 0;
    
    for (int i=0; i < answers.size(); i++)
        if (answers[i] == num1Array[i % 5])
            numAnswer[0]++;
    for (int i=0; i < answers.size(); i++)
        if (answers[i] == num2Array[i % 8])
            numAnswer[1]++;
    for (int i=0; i < answers.size(); i++)
        if (answers[i] == num3Array[i % 10])
            numAnswer[2]++;
    
    max = *max_element(numAnswer.begin(), numAnswer.end());
    
    for (int i=0; i < 3; i++)
        if (numAnswer[i] >= max)
            answer.push_back(i+1);
    
    return answer;
}

int main() {
    //vector<int> answers {1, 2, 3, 4, 5};
    vector<int> answers {1, 3, 2, 4, 2};
    //vector<int> answers {2,1,2,4,5,2,4};
    
    for (auto& i : solution(answers))
        cout << i << " ";
    
    return 0;
}
