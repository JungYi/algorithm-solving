import java.util.Arrays;

public class LeetCode_1049_LastStoneWeightII {
    public int lastStoneWeightII(int[] stones) {
        int total = 0;
        for (int num : stones) total += num;
        
        int targetSum = total / 2;

        boolean[] dp = new boolean[targetSum+1];
        dp[0] = true;
        for (int i = 0; i < stones.length; i++) {
            int num = stones[i];
            System.out.println("------------num "+i+" ! ("+num+") ------------");
            
            for (int j = targetSum; j >= num; j--) {
                if (dp[j-num]) dp[j] = true;
                
                // System.out.println("dp[j]=dp["+j+"]");
                // System.out.println("dp[j-num]=dp["+j+"-"+num+"("+(j-num)+")]: "+dp[j-num]+", num="+num);
                System.out.println(Arrays.toString(dp));
            }
        }

        for (int j = targetSum; j >= 0; j--) 
            if (dp[j]) {
                System.out.println("dp[j]=dp["+j+"]");
                System.out.println("total-(2*j)="+(total-(2*j))+"");
                return total-(2*j);
            }
        
        return 0;
    }

    public static void main(String[] args) {
        LeetCode_1049_LastStoneWeightII s = new LeetCode_1049_LastStoneWeightII();
        int[] stones = {2,7,4,1,8,1};
        System.out.println(s.lastStoneWeightII(stones));
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}