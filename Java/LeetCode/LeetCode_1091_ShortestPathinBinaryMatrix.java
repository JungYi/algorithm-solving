import java.util.*;

public class LeetCode_1091_ShortestPathinBinaryMatrix {
    public int shortestPathBinaryMatrix(int[][] grid) {
        int n = grid.length;
        if (grid[0][0] == 1 || grid[n-1][n-1] == 1) return -1;

        int[][] directions = {
            {-1,-1}, {-1,0}, {-1,1},
            { 0,-1},         { 0,1},
            { 1,-1}, { 1,0}, { 1,1},
        };

        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{0,0,1});// {row, col, distance}
        grid[0][0] = 1;

        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int row = curr[0];
            int col = curr[1];
            int dis = curr[2];

            if (row == n-1 && col == n-1) return dis;

            for (int[] d : directions) {
                int nr = row + d[0];
                int nc = col + d[1];

                if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] == 0) {
                    grid[nr][nc] = 1;
                    queue.add(new int[]{nr, nc, dis+1});
                }
            }
        }
        return -1;
    }
    
    public static void main(String[] args) {
        LeetCode_1091_ShortestPathinBinaryMatrix s = new LeetCode_1091_ShortestPathinBinaryMatrix();
        int[][] grid = {{0,1},{1,0}};
        System.out.println(s.shortestPathBinaryMatrix(grid));
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}