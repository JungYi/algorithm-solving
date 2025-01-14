/*
 * prgms_086491.cpp
 *           #086491. 최소직사각형
 *
 * Author: JungYi Bae
 * Date  : 2025-01-14
 * URL   : https://school.programmers.co.kr/learn/courses/30/lessons/86491
 *
 */

//086491. 최소직사각형
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<int>> sizes) {
    int answer = 0;
    int maxW = 0;
    int maxH = 0;
    
    for (int i=0; i < sizes.size(); i++) {
        int bigger = sizes[i][0];
        int smaller = sizes[i][1];
        
        if (sizes[i][0] < sizes[i][1]) {
            bigger = sizes[i][1];
            smaller = sizes[i][0];
        }
        
        if (bigger > maxW)
            maxW = bigger;  //maxW = max(maxW, bigger);
        if (smaller > maxH)
            maxH = smaller; //maxH = max(maxH, smaller);
    }
    
    return maxW * maxH;
}

int solutionGpt(vector<vector<int>> sizes) {
    int answer = 0;
    int maxW = 0;
    int maxH = 0;
    
    for (const auto& size : sizes) {
        // 큰 값을 가로로, 작은 값을 세로로 정렬
        int bigger = max(size[0], size[1]);
        int smaller = min(size[0], size[1]);

        // 최대값 갱신
        maxW = max(maxW, bigger);
        maxH = max(maxH, smaller);
    }
    
    return maxW * maxH;
}

int main(int argc, const char * argv[]) {
    //vector<vector<int>> sizes {{60, 50}, {30, 70}, {60, 30}, {80, 40}};
    //vector<vector<int>> sizes {{10, 7}, {12, 3}, {8, 15}, {14, 7}, {5, 15}};
    //vector<vector<int>> sizes {{14, 4}, {19, 6}, {6, 16}, {18, 7}, {7, 11}};
    //------------------------반례 ! ! !
    vector<vector<int>> sizes {{10, 20}, {20, 10}, {15, 15}};
    
    cout << solution(sizes) << endl;
    
    return 0;
}
