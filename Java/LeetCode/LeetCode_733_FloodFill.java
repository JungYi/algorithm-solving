import java.util.*;

public class LeetCode_733_FloodFill {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        // 원래 색깔을 반드시 '변수'에 박제해야 함.
        int oldColor = image[sr][sc];
        if (image[sr][sc] == color) return image;

        int[][] directions = {
            {-1, 0}, // up
            { 1, 0}, // down
            { 0,-1}, // left
            { 0, 1}  // right
        };

        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{sr,sc});
        image[sr][sc] = color;

        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int row = curr[0];
            int col = curr[1];

            for (int i = 0; i < 4; i++) {
                int nr = row + directions[i][0];
                int nc = col + directions[i][1];

                if (nr >= 0 && nr < image.length && nc >= 0 && nc < image[0].length) {
                    if (image[nr][nc] == oldColor) {
                        image[nr][nc] = color;
                        queue.add(new int[]{nr, nc});
                    }
                }
            }
        }
        return image;
    }
    
    public static void main(String[] args) {
        LeetCode_733_FloodFill s = new LeetCode_733_FloodFill();
        int[][] image = {{1,1,1},{1,1,0},{1,0,1}};
        int sr = 1;
        int sc = 1;
        int color = 2;
        System.out.println(Arrays.deepToString(s.floodFill(image, sr, sc, color)));
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}