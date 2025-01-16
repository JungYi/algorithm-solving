/*
 * prgms_258712.cpp
 *           #258712. 가장 많이 받은 선물
 *
 * Author: JungYi Bae
 * Date  : 2025-01-11
 * URL   : https://school.programmers.co.kr/learn/courses/30/lessons/258712
 *
 */

//258712. 가장 많이 받은 선물
#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include <sstream>
#include <algorithm>

using namespace std;

/*
2차원 벡터 초기화
벡터의 행과 열의 크기를 아는 경우 다음과 같이 벡터의 크기를 초기화 할 수 있다.
vector<vector<int>> n(n, vector<int>(m)); : N*M만큼 2차원 벡터 공간만 확보
vector<vector<int>> n(n, vector<int>(m,0)); : N*M만큼 2차원 벡터 0으로 값 초기화
*/


int prgms_258712(vector<string> friends, vector<string> gifts) {
    //----------------------------------------------------------------------
    unordered_map<int, string> m; // int형 키와 string 밸류를 가지는 해시맵 생성
    unordered_map<int, string>::iterator iter;

    for (int i=0; i < friends.size(); i++) {
        m.insert(make_pair(i, friends[i]));
    }
    for (iter = m.begin(); iter != m.end(); iter++) {
        cout << "[" << iter->first << ", " << iter->second << "]" << " ";
    } // 반복자를 활용하여 접근
    //----------------------------------------------------------------------
    int n = (int)friends.size();
    vector<vector<int>> twodv(n, vector<int>(n,0));

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << twodv[i][j] << " ";
        }
        cout << "\n";
    }
    //----------------------------------------------------------------------
    return 0;
}

int solution(vector<string> friends, vector<string> gifts) {
    int answer = 0;

    int n = (int)friends.size();
    int A[50] = {0}; //선물을 준 사람 A
    int B[50] = {0}; //받은 사람 B
    //int SunMul[50] = {0}; //선물 지수
    vector<int> SunMul;

    unordered_map<int, string> m; // int형 키와 string 밸류를 가지는 해시맵 생성
    unordered_map<int, string>::iterator iter;

    for (int i=0; i < friends.size(); i++) {
        m.insert(make_pair(i, friends[i]));
    }

    for (int i=0; i < gifts.size(); i++) {
        int j=0;

        stringstream ss(gifts[i]); // 문자열을 스트림화
        string word; // 스트림을 한 줄씩 읽어, 공백 단위로 분리한 뒤, 결과 배열에 저장

        while (getline(ss, word, ' ')){
            if (j == 0) {
                for (auto it = m.begin(); it != m.end(); ++it) {
                    if (it->second == word) {
                        A[it->first]++;
                    }
                }
            }
            else if (j == 1) {
                for (auto it = m.begin(); it != m.end(); ++it) {
                    if (it->second == word) {
                        B[it->first]++;
                    }
                }
            }
            j++;
        }
    }


    for (int i=0; i < n; i++) {
        SunMul.push_back(A[i]-B[i]);
    }

    int max = 0;
    for (auto& e : SunMul) {
        if (e > max) {
            max = e;
        }
    }

    for (int i=0; i < n; i++) {
        cout << SunMul[i] << endl;
    }

    for (int i=0; i < n; i++) {
        cout << A[i] << endl;
    }

//    cout << find(SunMul.begin(), SunMul.end(), max) - SunMul.begin(); // index 확인


    auto it = std::find(SunMul.begin(), SunMul.end(), max);
    if (it != SunMul.end()) {
        int num = (int)distance(SunMul.begin(), it);
        cout << " Found: " << max << " at position: " << distance(SunMul.begin(), it) << "\n";
        answer = A[num];
        cout << num << endl;
    }

    cout << answer << endl;

    return answer;
}

int main(int argc, const char * argv[]) {
    vector<string> friends = {"muzi", "ryan", "frodo", "neo"};
    vector<string> gifts = {"muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"};

//    vector<string> friends = {"joy", "brad", "alessandro", "conan", "david"};
//    vector<string> gifts = {"alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"};

//    vector<string> friends = {"a", "b", "c"};
//    vector<string> gifts = {"a b", "b a", "c a", "a c", "a c", "c a"};

    cout << solution(friends, gifts) << endl;

    return 0;
}
