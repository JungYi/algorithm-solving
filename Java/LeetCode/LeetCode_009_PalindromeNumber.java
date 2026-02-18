public class LeetCode_009_PalindromeNumber {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;

        String str = String.valueOf(x);

        int left = 0;
        int right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) return false;

            left++;
            right--;
        }
        return true;
    }

    public boolean isPalindromeOthers(int x) {
        if (x < 0 || (x % 10 == 0 && x != 0)) return false;

        int reverted = 0;
        // x가 뒤집힌 숫자보다 클 때까지만 반복 (즉, 절반까지 왔을 때 멈춤)
        while (x > reverted) {
            // x의 가장 뒷자리 숫자를 떼서 revertedNumber에 붙여주기
            reverted = (reverted * 10) + (x % 10);
            x /= 10;
        }
        /** 12321 (홀수) 일 때
         * 시작: x = 12321, rev = 0
         * 1회전: rev = 1, x = 1232
         * 2회전: rev = 12, x = 123
         * 3회전: rev = 123, x = 12 (rev > x보다 커졌네? 멈춰!)
         * 홀수일 때는 가운데 숫자(3)가 rev의 맨 뒤에 붙어있으니,
         * rev / 10을 해서 3을 떼고 비교합니다. 12 == 12 이니까 true!
         */
        return x == reverted || x == reverted / 10;
    }

    public static void main(String[] args) {
        LeetCode_009_PalindromeNumber s = new LeetCode_009_PalindromeNumber();
        // int x = 121;
        int x = 10;
        System.out.println(s.isPalindrome(x));
        System.out.println(s.isPalindromeOthers(x));
    }
    
    /**
     * cd Java/LeetCode
     * javac LeetCode_416_PartitionEqualSubsetSum.java
     * java LeetCode_416_PartitionEqualSubsetSum
     */
}