import java.util.Arrays;

public class LeetCode_416_PartitionEqualSubsetSum {
    public boolean canPartition(int[] nums) {
        int sum = 0;
        // for (int num : nums) totalSum += num;
        for (int i = 0; i < nums.length; i++)
            sum += nums[i];
        if (sum % 2 != 0) return false;

        int half = sum / 2;
        boolean[] dp = new boolean[half+1];
        dp[0] = true;

        /**
        int[] dp = new int[half+1];
        dp[0] = 1;
        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            for (int j = half; j >= num; j--) {
                if (dp[j-num] == 1) dp[j] = 1;
                
                System.out.println("dp[j-num]=dp["+j+"-"+num+"("+(j-num)+")]: "+dp[j-num]+", num="+num);
                System.out.println(Arrays.toString(dp));
            }
        }
         */
        
        for (int num : nums)
            for (int j = half; j >= num; j--)
                if (dp[j-num]) dp[j] = true;
         
        // [V] 0, [ ] 1, [V] 2, [ ] 3, [ ] 4, [ ] 5
        return dp[half];
    }

    public static void main(String[] args) {
        LeetCode_416_PartitionEqualSubsetSum s = new LeetCode_416_PartitionEqualSubsetSum();
        int[] A = {1,5,11,5,3,3};
        System.out.println(s.canPartition(A));
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}