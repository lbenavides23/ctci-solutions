// Questions for Interviewer
// is the string an ASCII string or a Unicode string?

// Time complexity:
// O(n) where n is the length of the string, or

// Space complexity:
// O(1) where the loop will not pass 128 chars

public class q1_1_is_Unique {
	public static boolean isUniqueChars(String str) { // boolean setup
		if (str.length() > 128) { // quick check
			return false;
		}
		boolean[] char_set = new boolean[128]; // boolean set at 128 char
		
		for (int i = 0; i < str.length(); i++) { // for condition
			int val = str.charAt(i); // value based on index of string
			if (char_set[val]) { // Already found this char in string
				return false;
			}
			char_set[val] = true;
		}
		return true;
	}
	
	public static void main(String[] args) {
		String[] words = {"abcde", "hello", "apple", "kite", "padle"};
		for (String word : words) {
			System.out.println(word + ": " + isUniqueChars(word) + " ");
		}
	}

}