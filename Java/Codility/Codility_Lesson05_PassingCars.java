public class Codility_Lesson05_PassingCars {
    public int solution(int[] A) {
        if (A.length == 1) return 0;

        int car = 0;
        int preSum = 0;
        for (int i = 0; i < A.length; i++) {
            if (A[i] == 0) 
                car++;
            else if (A[i] == 1) 
                preSum += car;
            
            if (preSum > 1000000000) return -1;
        }
        return preSum;
    }

    public static void main(String[] args) {
        Codility_Lesson05_PassingCars s = new Codility_Lesson05_PassingCars();
        int[] A = {0,1,0,1,1};
        System.out.println(s.solution(A));
    }
    
    /**
     * cd Java/Codility
     * javac Codility_Lesson09_MaxProfit.java
     * java Codility_Lesson09_MaxProfit
     */
}