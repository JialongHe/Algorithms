import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public static List<Integer> findSubstring(String s, String[] words) {
        if (words[0].length() * words.length > s.length()) {
            return new ArrayList<>();
        }

        List<Integer> ans = new ArrayList<>();
        Map<String, Integer> word_frq = new HashMap<>();

        for (String str : words) {
            word_frq.put(str, word_frq.getOrDefault(str, 0) + 1);
        }

        int wordlen = words[0].length();
        String[] str = new String[s.length()];
        for (int i = 0; i < wordlen; i++) {
            Map<String, Integer> frq = new HashMap<>();
            int begin = i;
            int size = 0;
            
            for (int j = i; j <= s.length() - wordlen; j += wordlen) {
                str[j] = s.substring(j, j + wordlen);
                if (word_frq.containsKey(str[j])) {
                    begin = begin == -1 ? j : begin;
                    frq.put(str[j], frq.getOrDefault(str[j], 0) + 1);
                    size++;

                    if (size == words.length) {
                        if (frq.equals(word_frq)) {
                            ans.add(begin);
                        }

                        frq.put(str[begin], frq.get(str[begin]) - 1);
                        begin += wordlen;
                        size--;
                    }
                } else {
                    begin = -1;
                    size = 0;
                    frq.clear();
                }
            }
        }

        return ans;
    }
}

class Main {
    public static void main(String[] args) {
        final String s = "barfoothefoobarman";
        final String[] words = {"foo","bar"};
        System.out.println(Solution.findSubstring(s, words));
    }
}