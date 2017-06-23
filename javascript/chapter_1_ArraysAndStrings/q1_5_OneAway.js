'use strict';

/*
* Problem: Palindrome Permutation
* Algorithm; Assumption: 0 < # of characters < # of characters < 257
*
*/


/*
*
* Solution 1 : No data structure used.
* Time:
*
*/

function isOneAway(a, b) {
  // based on the minimum length of s,t.
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    // if the first character dont match
    if (a.charAt(i) !== b.charAt(i)) {
            // if the length of the strings matches
            if (a.length === b.length) {
                // return true or false base on the next character
                return console.log(a.substring(i + 1) === b.substring(i + 1),a,b);
            }
              // if the length of string "b" is greater than string "a"
              else if (a.length < b.length) {
                // return T/F base on current charc of "a" and next charc of "b"
                return console.log(a.substring(i) === b.substring(i + 1),a,b);
              }
                else {
                 // return T/F base on current charc of "b" and next charc of "a"
                return console.log(a.substring(i + 1) === b.substring(i),a,b);
                }
     }
  }
  // returns T/F if the different is equal to one
  return console.log(Math.abs(a.length - b.length) === 1, a,b);
};

console.log("-------------------------");
isOneAway("pale", "ple");
isOneAway("pales", "pale");
isOneAway("pale", "bale");
isOneAway("pale", "bake");



console.log("-------------------------");
isOneAway("pale", "ple");
isOneAway("pales", "pale");
isOneAway("pale", "bale");
isOneAway("pale", "bake");
