//
//  prgms_042747.cpp
//  algorithmProject
//
//  Created by 배정이 on 1/18/25.
//

//#include <stdio.h>

#include <iostream>
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> citations) {
    int answer = 0;
    int n = 0; //논문 n편 중
    int h = 0; //h번 이상 인용된 논문이, h편 이상이고, 나머지 논문이 h번 이하 인용
    int max = 0;
    sort(citations.rbegin(), citations.rend()); //내림차순
    
    for (int i=0; i < citations.size(); i++) {
        if (citations[i] != 0) {
            h++;
            return citations[i];
        }
    }
    
    
    for (auto& i : citations)
        cout << i << '\n';
    
    return answer;
}

int main() {
    //vector<int> citations {3, 0, 6, 1, 5};
    vector<int> citations {1545, 2, 999, 790, 540, 10, 22};
    
    cout << solution(citations) << endl;

    return 0;
}
