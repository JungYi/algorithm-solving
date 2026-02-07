public class Codility_Lesson09_MaxProfit {
    public int solution(int[] A) {
        if (A.length <= 1) return 0;

        // int minPrice = A[0];
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;

        for (int i = 1; i < A.length; i++) {
            if (A[i] < minPrice)
                minPrice = A[i];
            // if (A[i] - minPrice > 0)
            // else if (A[i] - minPrice > maxProfit) {
            else
                maxProfit = Math.max(A[i] - minPrice, maxProfit);
        }

        return maxProfit;
    }

    public static void main(String[] args) {
        Codility_Lesson09_MaxProfit s = new Codility_Lesson09_MaxProfit();
        int[] A = {23171, 21011, 21123, 21366, 21013, 21367};
        System.out.println(s.solution(A)); // 기대값: 356
    }
}