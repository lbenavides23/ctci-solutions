'use strict';

/*
* Problem: Unique Characters
* Algorithm; Assumption: 0 < # of characters < # of characters < 257
*
*/


/*
*
* Solution 1 : No data structure used
* Time: O(n^2)
*
*/

function uniqueChars1(string) {
  for (var i=0; i< string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if(string[i] === string[j]) {
        return console.log("S1: False"); // if match, return false
      }
    }
  }
  return console.log("S1: True"); // if no match, return true
}

uniqueChars1("qwertyr");



/*
*
* Solution 2 : Hash Set data structure
* Time: O(N)
*
*/

function uniqueChars2(str){
  let chars = new Set();

  for (let i=0; i< str.length; ++i){
    if(chars.has(str[i])){
      return console.log("S2: False"); // if match, return false
    }
    chars.add(str[i]);
  }
  return console.log("S2: True"); // if no match, return true
}

uniqueChars2("str");
