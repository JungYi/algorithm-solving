/*
 * Leet_ValidSudoku.cpp
 *           #Valid Sudoku
 *
 * Author: JungYi Bae
 * Date  : 2025-11-14
 * URL   : https://leetcode.com/problems/valid-sudoku/description/
 *
 */

//Valid Sudoku
#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

bool isValidSudoku(vector<vector<char>>& board) {
    unordered_set<char> rowSet;
    unordered_set<char> colSet;
    unordered_set<char> boxSet;
    bool answer = true;
    
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            int boxI = i-(i%3)+(j/3);
            int boxJ = 3*(i%3)+(j%3);
            cout << "--i:["<< boxI << "]--j:["<< boxJ << "], sum:" << board[boxI][boxJ] << '\n';
            
            if (board[i][j] != '.') {
                if (rowSet.count(board[i][j]))
                    return false;
                rowSet.insert(board[i][j]);
            }
            
            if (board[j][i] != '.') {
                if (colSet.count(board[j][i]))
                    return false;
                colSet.insert(board[j][i]);
            }
            
            if (board[boxI][boxJ] != '.') {
                if (boxSet.count(board[boxI][boxJ]))
                    return false;
                boxSet.insert(board[boxI][boxJ]);
            }
        }
        rowSet.clear();
        colSet.clear();
        boxSet.clear();
    }
    return answer;
}

bool isValidSudokuOthers(vector<vector<char>>& board) {
    // rows[i][num] : i번째 행에 숫자 num가 있었는지
    bool rows[9][10] = {false}; //1~9까지의 행에서 num 숫자의 존재여부. 처음엔 존재하지 않음.
    bool cols[9][10] = {false};
    bool boxes[9][10] = {false};

    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') continue;

            int num = board[i][j] - '0';              // 문자('1'~'9')를 정수(1~9)로 변환. stoi는 비효율적, (int)'5' = 53 ASCII 코드 → 스도쿠에 부적합
            int boxIndex = (i / 3) * 3 + (j / 3);     // 0~8 박스 인덱스

            if (rows[i][num] || cols[j][num] || boxes[boxIndex][num])
                return false;

            rows[i][num] = true;
            cols[j][num] = true;
            boxes[boxIndex][num] = true;
        }
    }
    return true;
}

int main() {
    vector<vector<char>> board =
        {{'5','3','.','.','7','.','.','.','.'}
        ,{'6','.','.','1','9','5','.','.','.'}
        ,{'.','9','8','.','.','.','.','6','.'}
        ,{'8','.','.','.','6','.','.','.','3'}
        ,{'4','.','.','8','.','3','.','.','1'}
        ,{'7','.','.','.','2','.','.','.','6'}
        ,{'.','6','.','.','.','.','2','8','.'}
        ,{'.','.','.','4','1','9','.','.','5'}
        ,{'.','.','.','.','8','.','.','7','9'}};
//    vector<vector<char>> board =
//    {{'8','3','.','.','7','.','.','.','.'}
//    ,{'6','.','.','1','9','5','.','.','.'}
//    ,{'.','9','8','.','.','.','.','6','.'}
//    ,{'8','.','.','.','6','.','.','.','3'}
//    ,{'4','.','.','8','.','3','.','.','1'}
//    ,{'7','.','.','.','2','.','.','.','6'}
//    ,{'.','6','.','.','.','.','2','8','.'}
//    ,{'.','.','.','4','1','9','.','.','5'}
//    ,{'.','.','.','.','8','.','.','7','9'}};
    
    isValidSudoku(board);

    return 0;
}
