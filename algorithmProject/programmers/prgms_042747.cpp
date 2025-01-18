/*
 * prgms_042747.cpp
 *           #042747. H-Index
 *
 * Author: JungYi Bae
 * Date  : 2025-01-18
 * URL   : https://school.programmers.co.kr/learn/courses/30/lessons/42747
 *
 */

//042747. H-Index
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> citations) {
    int answer = 0;
    //논문 n편 중 h번 이상 인용된 논문이, h편 이상이고, 나머지 논문이 h번 이하 인용
    
    sort(citations.begin(), citations.end()); //내림차순
    //sort(citations.rbegin(), citations.rend()); //내림차순
    
    for (int i=0; i < citations.size(); i++) {
        //cout << i << "번째입니다. " << citations[i] << "번 이상 인용된 논문이 " << citations.size()-i << "개입니다." << endl;
        if (citations[i] >= citations.size()-i) {
            answer = (int)citations.size()-i;
            return answer;
        }
    }
    
    for (auto& i : citations)
        cout << i << '\n';
    
    return answer;
}

int main() {
    //vector<int> citations {3, 0, 6, 1, 5};
    //vector<int> citations {7};
    //vector<int> citations {10, 50, 100};
    //vector<int> citations {4, 3, 3, 3, 3};
    vector<int> citations {22, 47};
    //vector<int> citations {2, 7, 5};
    //vector<int> citations {1545, 2, 999, 790, 540, 10, 22};
    
    cout << solution(citations) << endl;

    return 0;
}
