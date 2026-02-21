import java.util.Arrays;

public class LeetCode_130_SurroundedRegions {
    public void solve(char[][] board) {
        if (board == null || board.length == 0) return;

        for (int row = 0; row < board.length; row++) {
            dfs(board, row, 0);
            dfs(board, row, board[0].length-1);
        }
        for (int col = 0; col < board[0].length; col++) {
            dfs(board, 0, col);
            dfs(board, board.length-1, col);
        }

        for (int row = 0; row < board.length; row++) {
            for (int col = 0; col < board[0].length; col++) {
                if (board[row][col] == 'O') {
                    board[row][col] = 'X';
                } else if (board[row][col] == 'S') {
                    board[row][col] = 'O';
                }
            }
        }
        // System.out.println(Arrays.toString(board));
        System.out.println(Arrays.deepToString(board));
    }

    public void dfs(char[][] board, int row, int col) {
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] != 'O') return;

        board[row][col] = 'S';

        dfs(board, row-1, col);
        dfs(board, row+1, col);
        dfs(board, row, col-1);
        dfs(board, row, col+1);
    }

    public static void main(String[] args) {
        LeetCode_130_SurroundedRegions s = new LeetCode_130_SurroundedRegions();
        char[][] board = {
                        {'X','X','X','X'},
                        {'X','O','O','X'},
                        {'X','X','O','X'},
                        {'X','O','X','X'}
                        };
        s.solve(board);
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}