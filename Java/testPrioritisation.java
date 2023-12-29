import java.util.Arrays;
import java.util.HashMap;

public class testPrioritisation {
    public static String[][] testPrioritisation(String[][] testSuite) {
        float[][] distanceMetrix = {{0,0,0,0},{0,0,0,0},{0,0,0,0},{0,0,0,0}};

        for (int i = 0; i < testSuite.length; i++) {
            for (int j = i; j < testSuite.length; j++) {
                if (i == j) {
                    distanceMetrix[i][j] = 1F;
                }
                distanceMetrix[i][j] = calculateDistance(testSuite[i], testSuite[j]);
            }
        }

        // Print out the distances
        System.out.println(Arrays.deepToString(distanceMetrix));
        String[][] prioritisedTestSuite = {};

        return prioritisedTestSuite;
    }

    public static float calculateDistance(String[] testA, String[] testB) {
        HashMap<String, Integer> map = new HashMap<>();
        float distance;

        for (String str : testA) {
            map.put(str, map.getOrDefault(str, 0) + 1);
        }

        int intersection = 0;
        for (String str : testB) {
            if (map.getOrDefault(str, 0) > 0) {
                intersection += 1;
            }
        }
        distance = (float)intersection / (float)(testA.length + testB.length - intersection);
        return distance;
    }

    public static void main(String[] args) {
        final String[] testA = {"create", "an", "table", "for", "test", "cases"};
        final String[] testB = {"delete", "an", "table", "for", "test", "cases"};
        final String[] testC = {"update", "test", "cases"};
        final String[] testD = {"whatever", "content"};

        final String[][] testSuite = {
            testA,
            testB,
            testC,
            testD,
        };
        
        System.out.println(Arrays.deepToString(testPrioritisation(testSuite)));
    }
}
