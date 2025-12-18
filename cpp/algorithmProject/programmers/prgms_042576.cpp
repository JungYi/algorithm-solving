/*
 * prgms_042576.cpp
 *           #042576. 완주하지 못한 선수
 *
 * Author: JungYi Bae
 * Date  : 2025-01-19
 * URL   : https://school.programmers.co.kr/learn/courses/30/lessons/42576
 *
 */

//042576. 완주하지 못한 선수
#include <iostream>
#include <string>
#include <vector>
#include <unordered_set>
#include <unordered_map>

using namespace std;

string solutionOthers(vector<string> participant, vector<string> completion) {
    string answer = "";
    
    unordered_set<string> set;
    unordered_map<string, int> map;
    
    for (const auto& i : set)
        cout << i << endl;
    for (const auto& i : map)
        cout << i.first << " -> " << i.second << ", ";
    
    for (int i=0; i < participant.size(); i++) {
        if(map.find({participant[i]}) == map.end()) // 찾는 값이 없을 때
            map.insert({participant[i], 1});
        else // 찾는 값이 있을 때
            map[participant[i]]++;
    }
    
    for (auto i : completion)
        map[i]--;

    for (auto i : participant)
        if (map[i] > 0) {
            answer = i;
            break;
        }
    
    return answer;
}

int main() {
//    vector<string> participant {"leo", "kiki", "eden"};
//    vector<string> completion {"eden", "kiki"};
//    vector<string> participant {"marina", "josipa", "nikola", "vinko", "filipa"};
//    vector<string> completion {"josipa", "filipa", "marina", "nikola"};
    vector<string> participant {"mislav", "stanko", "mislav", "ana"};
    vector<string> completion {"stanko", "ana", "mislav"};
    
    cout << solutionOthers(participant, completion) << endl;
    
    return 0;
}
