public class LeetCode_1672_RichestCustomerWealth {
    public int maximumWealth(int[][] accounts) {
        int answer = 0;
        for (int i = 0; i < accounts.length; i++) {
            int maxWealth = 0;
            for (int j = 0; j < accounts[i].length; j++) {
                maxWealth += accounts[i][j];
                if (maxWealth > answer) answer = maxWealth;
            }
        }

        return answer;
    }

    public static void main(String[] args) {
        LeetCode_1672_RichestCustomerWealth s = new LeetCode_1672_RichestCustomerWealth();
        // int[][] accounts = {{1,2,3},{3,2,1}};
        int[][] accounts = {{2,8,7},{7,1,3},{1,9,5}};
        System.out.println(s.maximumWealth(accounts));
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}