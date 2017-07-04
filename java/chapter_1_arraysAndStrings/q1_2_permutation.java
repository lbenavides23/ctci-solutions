// q1_2_Permutation: Variation of Two strings

// Questions to ask Interview
// 1. Are string variations case senstive?
// 2. Is white space significant (wss)? 
// *  This question is case senstive and wss.

// Time complexity:
// O(n) where n is the length of the string, or

// Space complexity:
//

public class q1_2_permutation {
	public static String sort(String s) {
		char[] content = s.toCharArray();
		java.util.Arrays.sort(content);
		return new String(content);
	}
	
	public static boolean permutation(String s, String t) {
		return sort(s).equals(sort(t));
	}	
	
	public static void main(String[] args) {
		String[][] pairs = {{"apple", "papel "}, {"carrot", "tarroc"}, {"hello", "llloh"}};
		for (String[] pair : pairs) {
			String word1 = pair[0];
			String word2 = pair[1];
			boolean anagram = permutation(word1, word2);
			System.out.println(word1 + ", " + word2 + ": " + anagram);
		}
	}
}