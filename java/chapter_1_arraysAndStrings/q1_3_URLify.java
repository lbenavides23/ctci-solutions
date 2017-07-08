// q1_3_URLify: string munipulation (replace space with "%20)

// Questions to ask Interviewer
// 1. 

// Assumption
// 1. String has enough space for additional chars
// 2. Given: True value of string
// 3. Used character array because Java strings are immutable
// 4. Munipulation algo edits from end and work backwards
// 5. Algo: two - scan approach (search for space and chars)

//import CtCILibrary.AssortedMethods;

public class q1_3_URLify {
	// Assume string has sufficient free space at the end
	public static void replaceSpaces(char[] str, int trueLength) {
		int spaceCount = 0, index, i = 0;
		for (i = 0; i < trueLength; i++) {
			if (str[i] == ' ') {
				spaceCount++;
			}
		}
		index = trueLength + spaceCount * 2;
		if (trueLength < str.length) str[trueLength] = '\0';
		for (i = trueLength - 1; i >= 0; i--) {
			if (str[i] == ' ') {
				str[index - 1] = '0';
				str[index - 2] = '2';
				str[index - 3] = '%';
				index = index - 3;
			} else {
				str[index - 1] = str[i];
				index--;
			}
		}
	}
	
	
	public static int findLastCharacter(char[] str) {
		for (int i = str.length - 1; i >= 0; i--) {
			if (str[i] != ' ') {
				return i;
			}
		}
		return -1;
	}
	
	public static void main(String[] args) {
		String str = "Mr Angel Benavides    ";
		char[] arr = str.toCharArray();
		int trueLength = findLastCharacter(arr) + 1;
		replaceSpaces(arr, trueLength);	
		System.out.println("\"" + AssortedMethods.charArrayToString(arr) + "\"");
	}
}
