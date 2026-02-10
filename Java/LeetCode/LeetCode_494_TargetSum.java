import java.util.Arrays;

public class LeetCode_494_TargetSum {
    public int findTargetSumWays(int[] nums, int target) {
        // sum = (target + totalSum) / 2

        int totalSum = 0;
        // for (int num : nums) totalSum += num;
        for (int i = 0; i < nums.length; i++)
            totalSum += nums[i];
        if ((target + totalSum) % 2 != 0) return 0;

        // [추가 예외 처리] 목표가 전체 합보다 크면 절대 못 만듦.
        // if (Math.abs(target) > totalSum) return 0;
        
        int targetSum = (target + totalSum) / 2;
        if (targetSum < 0) return 0;

        int[] dp = new int[targetSum+1];
        dp[0] = 1;
        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            System.out.println("------------num "+i+" ! ("+num+") ------------");
            
            for (int j = targetSum; j >= num; j--) {
                dp[j] = dp[j] + dp[j-num];
                
                System.out.println("dp[j]=dp["+j+"]");
                System.out.println("dp[j-num]=dp["+j+"-"+num+"("+(j-num)+")]: "+dp[j-num]+", num="+num);
                System.out.println(Arrays.toString(dp));
            }
        }
        return dp[targetSum];
    }

    public static void main(String[] args) {
        LeetCode_494_TargetSum s = new LeetCode_494_TargetSum();
        int[] nums = {1,1,1,1,1};
        int target = 3;
        System.out.println(s.findTargetSumWays(nums, target));
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}