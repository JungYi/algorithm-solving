import java.util.Arrays;

public class LeetCode_200_NumberofIslands {
    public int numIslands(char[][] grid) {
        int count = 0;
        for (int row = 0; row < grid.length; row++) {
            for (int col = 0; col < grid[0].length; col++) {
                // System.out.println("row: "+row+", col: "+col);
                if (grid[row][col] == '1') {
                    count++;
                    dfs(grid, row, col);
                }
            }
        }
        return count;
    }

    public void dfs(char[][] grid, int row, int col) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;
        if (grid[row][col] == '0') return;

        grid[row][col] = '0';

        System.out.println("Sinking target at [" + row + ", " + col + "]:");
        printGridSimple(grid);

        dfs(grid, row-1, col); // up
        dfs(grid, row+1, col); // down
        dfs(grid, row, col-1); // left
        dfs(grid, row, col+1); // right
    }

    private void printGridSimple(char[][] grid) {
        for (char[] row : grid) {
            for (char c : row) {
                System.out.print(c + " ");
            }
            System.out.println();
        }
        System.out.println("-----------------");
    }

    public static void main(String[] args) {
        LeetCode_200_NumberofIslands s = new LeetCode_200_NumberofIslands();
        char[][] grid = {
                        {'1','1','1','1','0'},
                        {'1','1','0','1','0'},
                        {'1','1','0','0','0'},
                        {'0','0','0','0','0'}
                        };
        System.out.println(s.numIslands(grid));
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}