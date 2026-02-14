import java.util.Arrays;

public class LeetCode_322_CoinChange {
    public int coinChange(int[] coins, int amount) {
        int max = amount+1;
        int[] dp = new int[amount+1];
        Arrays.fill(dp, max);

        dp[0] = 0;

        for (int coin : coins) {
            for (int j = coin; j <= amount; j++) {
                dp[j] = Math.min(dp[j], dp[j-coin]+1);
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }

    public static void main(String[] args) {
        LeetCode_322_CoinChange s = new LeetCode_322_CoinChange();
        int[] coins = {1,2,5};
        int amount = 11;
        System.out.println(s.coinChange(coins, amount));
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}