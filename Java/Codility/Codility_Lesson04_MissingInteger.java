import java.util.HashSet;

public class Codility_Lesson04_MissingInteger {
    public int solution(int[] A) {
        HashSet<Integer> set = new HashSet<>();

        for (int i = 0; i < A.length; i++)
            if (A[i] > 0) set.add(A[i]);

        for (int i = 1; i < A.length; i++)
            if (!set.contains(i)) return i;

        return A.length + 1;
    }

    public int solutionOthers(int[] A) {
        HashSet<Integer> set = new HashSet<>();
        
        for (int num : A)
            if (num > 0) set.add(num);
        
        int smallest = 1;
        while (set.contains(smallest))
            smallest++;

        return smallest;
    }

    public int solutionOthers2(int[] A) {
        int N = A.length;
        boolean[] checklist = new boolean[N+1]; 

        for (int i = 0; i < N; i++) 
            if (A[i] >= 1 && A[i] <= N) 
                checklist[A[i]] = true;

        for (int i = 1; i <= N; i++)
            if (!checklist[i]) return i;
        
        return N+1; // 모든 숫자가 1~N 까지 다 있다면 다음 숫자인 N+1 리턴
    }

    public static void main(String[] args) {
        Codility_Lesson04_MissingInteger s = new Codility_Lesson04_MissingInteger();
        int[] A = {1,3,6,4,1,2};
        System.out.println(s.solution(A));
        System.out.println(s.solutionOthers(A));
        System.out.println(s.solutionOthers2(A));
    }
    
    /**
     * cd Java/Codility
     * javac Codility_Lesson09_MaxProfit.java
     * java Codility_Lesson09_MaxProfit
     */
}