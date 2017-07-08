// q1_4_Palindrome Permutation: variation of a palindrome

// Questions to ask Interviewer
// 1. 

// Assumption
// 1. Palindrome is a string that is the same forward and backwards
// 2. Permutation can be a variation
// 3. We need to have a even and odd count of characters


// Time complexity:
// O(n) where n is the length of the string

// Space complexity:
//

public class q1_4_palinperm {
	public static boolean isPermutationOfPalindrome(String phrase){
		int[] table = buildCharFrequencyTable(phrase);
		return checkMaxOneOdd(table);
	}

	/* Check that no more than one character has an odd count. */
	public static boolean checkMaxOneOdd(int[] table){
		boolean foundOdd = false;
		for (int count: table){
			if(count % 2 == 1){
				if (foundOdd){
					return false;
				}
				foundOdd = true;
			}
		}
		return true;
	}

	/* Map each character to a number. a -> 0, b -> 1, c -> 2, etc.
	 * This is case insensitive. Non-letter characters map to -1. */
	public static int getCharNumber(Character c){
		int a = Character.getNumericValue('a');
		int z = Character.getNumericValue('z');
		int val = Character.getNumericValue(c);
		if (a <= val && val <= z){
			return val - a;
		}
		return -1;
	}

	/* Count how many times each character appears. */
	public static int[] buildCharFrequencyTable(String phrase) {
		int[] table = new int[Character.getNumericValue('z') -
					Character.getNumericValue('a') + 1];
		for (char c : phrase.toCharArray()) {
			int x = getCharNumber(c);

			if (x != -1){
				table[x]++;
			}
		}
		return table;
	}

	// Insert Print Function Here
	// "taco cat"  --->  "atco cta"

}


