import java.util.Arrays;

public class LeetCode_066_PlusOne {
    public int[] plusOne(int[] digits) {
        int len = digits.length;
        for (int i = len-1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }

        // 여기까지 내려왔다는 건 [9,9,9] 처럼 모든 자리가 0이 됐다는 뜻!
        int[] arr = new int[len + 1];
        arr[0] = 1;
        return arr;
    }

    public static void main(String[] args) {
        LeetCode_066_PlusOne s = new LeetCode_066_PlusOne();
        // int[] digits = {1,2,3};
        int[] digits = {9,9,9};
        // System.out.println(s.plusOne(digits));
        System.out.println(Arrays.toString(s.plusOne(digits)));
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}