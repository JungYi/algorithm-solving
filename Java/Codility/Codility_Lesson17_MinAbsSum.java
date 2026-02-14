import java.util.Arrays;

public class Codility_Lesson17_MinAbsSum {
    public int solution(int[] A) {
        if (A.length == 0) return 0;

        int total = 0;
        int[] counts = new int[101];
        for (int x : A) {
            int val = Math.abs(x);
            counts[val]++;
            total += val;
        }
        
        int targetSum = total / 2;

        int[] dp = new int[targetSum+1];
        Arrays.fill(dp, -1);
        dp[0] = 0;
        
        for (int i = 1; i < 101; i++) {
            if (counts[i] == 0) continue;
            
            for (int j = 0; j <= targetSum; j++) {
                if (dp[j] >= 0) dp[j] = counts[i];
                else if (j >= i && dp[j-i] > 0) dp[j] = dp[j-i]-1;
                else dp[j] = -1;
            }
        }

        for (int j = targetSum; j >= 0; j--) 
            if (dp[j] >= 0) {
                // System.out.println("dp[j]=dp["+j+"]");
                // System.out.println("total-(2*j)="+(total-(2*j))+"");
                return total-(2*j);
            }
        
        return total;
    }

    public static void main(String[] args) {
        Codility_Lesson17_MinAbsSum s = new Codility_Lesson17_MinAbsSum();
        int[] A = {1,5,2,-2};
        System.out.println(s.solution(A));
    }
    
    /**
     * cd Java/Codility
     * javac Codility_Lesson09_MaxProfit.java
     * java Codility_Lesson09_MaxProfit
     */
}