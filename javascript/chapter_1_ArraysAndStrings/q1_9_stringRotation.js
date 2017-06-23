'use strict';

/****
 * Is string a subString of another
 *
 * Time: O(N)
 *
 * @parm {string}     str1  First string
 * @parm {string}     str2  String to check if it is a rotated version of str1
 * @return {boolean}        True if str1 and str2 are rotated versions of eachother, otherwise false
 *
****/

export function isRotatedSubstring(str1, str2) {
  if (!str1 || !str2) { throw new Error('invalid input'); } // need two inputs
  if (str1.length !== str2.length) { return false; }        // length must have the same length
      return isSubstring(str1 + str1, str2);                // calls isSubstring function helper
}

function isSubstring(str, substr) { return str.includes(substr);  // use includes T/F method to check for elements
}

isRotatedSubstring("waterbottle", "erbottlewat");
