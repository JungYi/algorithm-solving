import java.util.Arrays;

public class Codility_Lesson17_NumberSolitaire {
    public int solution(int[] A) {
        int N = A.length;
        int[] dp = new int[N]; // Arrays.fill(dp, Integer.MIN_VALUE);

        dp[0] = A[0];
        
        for (int i = 1; i < N; i++) {
            System.out.println("------i("+i+")------");
            System.out.println(Arrays.toString(A));

            // int currentMax = Integer.MIN_VALUE; // each element of array A is an integer within the range [−10,000..10,000].
            int currentMax = -1000000001; //-10,000 * 100,000

            for (int j = Math.max(0, i-6); j < i; j++) {
                currentMax = Math.max(currentMax, dp[j]);

                System.out.println("i["+i+"],j["+j+"]: dp[i]="+dp[i]+", A[i]="+A[i]+", currentMax="+currentMax);
            }
            dp[i] = A[i] + currentMax;
        }
        System.out.println(Arrays.toString(dp));
        
        return dp[N-1];
    }

    public static void main(String[] args) {
        Codility_Lesson17_NumberSolitaire s = new Codility_Lesson17_NumberSolitaire();
        int[] A = {1,-2,0,9,-1,-2};
        // int[] A = {1,-2,0,9,-1,-2,1,5,4,-9,0,5};
        System.out.println(s.solution(A));
    }
    
    /**
     * cd Java/Codility
     * javac Codility_Lesson09_MaxProfit.java
     * java Codility_Lesson09_MaxProfit
     */
}