///*
// * HRank_000001.cpp
// *           #Minimum Loss
// *
// * Author: JungYi Bae
// * Date  : 2025-01-13
// * URL   : https://www.hackerrank.com/challenges/minimum-loss/problem?isFullScreen=true
// *
// */
//
////Minimum Loss
//#include <string>
//#include <vector>
//#include <iostream>
//#include <fstream>
//#include <algorithm>
//#include <functional>
//
//using namespace std;
//
//string ltrim(const string &);
//string rtrim(const string &);
//vector<string> split(const string &);
//
///*
// * Complete the 'minimumLoss' function below.
// *
// * The function is expected to return an INTEGER.
// * The function accepts LONG_INTEGER_ARRAY price as parameter.
// */
//
//int minimumLoss(vector<long> price) {
//    int answer = 0;
//    
//    return answer;
//}
//
//int main()
//{
//    ofstream fout(getenv("OUTPUT_PATH"));
//
//    string n_temp;
//    getline(cin, n_temp);
//
//    int n = stoi(ltrim(rtrim(n_temp)));
//
//    string price_temp_temp;
//    getline(cin, price_temp_temp);
//
//    vector<string> price_temp = split(rtrim(price_temp_temp));
//
//    vector<long> price(n);
//
//    for (int i = 0; i < n; i++) {
//        long price_item = stol(price_temp[i]);
//
//        price[i] = price_item;
//    }
//
//    int result = minimumLoss(price);
//
//    fout << result << "\n";
//
//    fout.close();
//
//    return 0;
//}
//
//string ltrim(const string &str) {
//    string s(str);
//
//    s.erase(
//        s.begin(),
//        //find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
//        find_if(s.begin(), s.end(), [](int c) {return !std::isspace(c);})
//    );
//
//    return s;
//}
//
//string rtrim(const string &str) {
//    string s(str);
//
//    s.erase(
//        //find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
//        find_if(s.rbegin(), s.rend(), [](int c) {return !std::isspace(c);}).base(),
//        s.end()
//    );
//
//    return s;
//}
//
//vector<string> split(const string &str) {
//    vector<string> tokens;
//
//    string::size_type start = 0;
//    string::size_type end = 0;
//
//    while ((end = str.find(" ", start)) != string::npos) {
//        tokens.push_back(str.substr(start, end - start));
//
//        start = end + 1;
//    }
//
//    tokens.push_back(str.substr(start));
//
//    return tokens;
//}
