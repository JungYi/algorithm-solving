/*
 * prgms_042626.cpp
 *           #042626. 더 맵게
 *
 * Author: JungYi Bae
 * Date  : 2025-01-12
 * URL   : https://school.programmers.co.kr/learn/courses/30/lessons/42626
 *
 */

//042626. 더 맵게
#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
#include <queue>

using namespace std;

int solution(vector<int> scoville, int K) {
    int answer = 0;
    
    if ((int)scoville.size() == 1) {
        if (scoville.at(0) < K)
            return -1;
        else
            return answer;
    }
    
    priority_queue<int, vector<int>, greater<int>> pqScoville;
    
    for (auto& i : scoville)
        pqScoville.push(i);
    
    while (!pqScoville.empty()) {
        int jisu = 0;
        if (pqScoville.top() < K) {
            if (pqScoville.size() == 1)
                return -1;
            else {
                int min = pqScoville.top();
                pqScoville.pop();
                jisu = min + (pqScoville.top()*2);
                pqScoville.pop();
                pqScoville.push(jisu);
                
                answer++;
            }
        }
        else {
            pqScoville.pop();
        }
    }
    
    return answer;
}

int main(int argc, const char * argv[]) {
    vector<int> scoville {1, 2, 3, 9, 10, 12};
    int K = 7;
    
    cout << solution(scoville, K) << endl;
    
    return 0;
}
