import java.util.Arrays;

public class LeetCode_198_HouseRobber {
    public int rob(int[] nums) {
        // DP[i] = DP[i-1] + DP[i-2]

        if (nums.length == 1) return nums[0];
        // else if (nums.length == 2) return nums[0] > nums[1] ? nums[0] : nums[1];

        int[] dp = new int[nums.length];

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (int i = 2; i < nums.length; i++) {
            System.out.println("---------num "+i+" ! ("+nums[i]+") ---------");
            dp[i] = Math.max(dp[i-1], (nums[i] + dp[i-2]));
            System.out.println("dp[i-1]="+dp[i-1]+", nums[i]="+nums[i]+", dp[i-2]="+dp[i-2]);
            System.out.println("dp[i]="+dp[i]);
        }
        System.out.println(Arrays.toString(dp));
        
        return dp[nums.length-1];
    }

    public static void main(String[] args) {
        LeetCode_198_HouseRobber s = new LeetCode_198_HouseRobber();
        // int[] nums = {1,2,3,1};
        // int[] nums = {2,7,9,3,1};
        int[] nums = {2,1,1,2};
        System.out.println(s.rob(nums));
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}