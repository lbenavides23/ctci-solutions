'use strict';

/*
* Problem: URLify
* Algorithm; Assumption: 0 < # of characters < # of characters < 257
*
*/


/*
*
* Solution 1 : No data structure used.
* Time:
*
*/

function urlify(str){

  let char = str.replace(/ /gi, "%20")
   console.log(char);

}

urlify("blue ivy stone"); // blue%20ivy%20stone
