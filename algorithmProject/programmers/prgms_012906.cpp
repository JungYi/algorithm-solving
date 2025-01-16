/*
 * prgms_012906.cpp
 *           #012906. 같은 숫자는 싫어
 *
 * Author: JungYi Bae
 * Date  : 2025-01-11
 * URL   : https://school.programmers.co.kr/learn/courses/30/lessons/12906
 *
 */

//012906. 같은 숫자는 싫어
#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(vector<int> arr)
{
    vector<int> answer;
    answer.push_back(arr[0]);

    for (int i=0; i < arr.size()-1; i++) {
        if (arr[i] != arr[i+1]) {
            answer.push_back(arr[i+1]);
        }
    }

    return answer;
}

int main(int argc, const char * argv[]) {
//    vector<int> arr {1,1,3,3,0,1,1};
    vector<int> arr {4,4,4,3,3};

    solution(arr);

    return 0;
}
