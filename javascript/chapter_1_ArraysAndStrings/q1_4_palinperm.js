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

function palinPerm(a,b){
  if (a.length != b.length) {
    console.log("Not PalinPerm");
  }

  let x = a.toLowerCase().split("").sort();
  let y = b.toLowerCase().split("").sort();
  let t = 0;

  for (let i = 0; i < a.length; i++){
    if (x[i] == y[t]){
      t++;
    }
  else {
    console.log("False, Not a PalinPerm");
    break;
  }
  }
  console.log("True, PalinPerm:", a+",", b);
}

palinPerm("Tact Coa", "taco cat"); //True
palinPerm("Tact Coa", "atco cta"); //True
