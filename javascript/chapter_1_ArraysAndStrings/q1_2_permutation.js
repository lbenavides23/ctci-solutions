'use strict';

/*
* Problem: Permutation
* Algorithm; Assumption: 0 < # of characters < # of characters < 257
*
*/


/*
*
* Solution 1 : No data structure used
* Time:
*
*/

function isPermutation(a, b) {

  let newSetA = a.toLowerCase().split("").sort();
  let newSetB = b.toLowerCase().split("").sort();
  let c = 0

  for (let i=0; i < newSetA.length; i++) {
    if (newSetA.length !== newSetB.length) {
      return console.log("No perm!");
    }
    else if (newSetA[i] == newSetB[c]) {
      c++;
      console.log("Yes perm!");
    }
    else {
      console.log("No perm!");
      break;
    }
  }
}

console.log("-----------");
isPermutation("dog", "dou "); // "No perm!"
isPermutation("dog", "gdo"); // "Yes perm!"
isPermutation("dog", " odg"); // "No perm!"
isPermutation("dog", "ogg"); // "No perm!"
