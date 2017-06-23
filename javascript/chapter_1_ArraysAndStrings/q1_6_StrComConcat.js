// String Compression and Concatenation Performance
// http://kevhuang.com/string-compression-and-concatenation-performance

/// Step 1: Create StringBuffer helper function (found in Java).
// StringBuffer and StringBuilder classes are used when there
// is a necessity to make a lot of modifications to Strings of characters
function setChar(array, index, char, count) {
  array[index++] = char;
  array[index++] = count;
  return index;
};

// Step 2: Create Compressed String Function
function compressedString (str) {
  // if the array is less than 3, return string
  if (str.length < 3) return console.log(str, str);

  var compressedStrArray = [];
  var index = 0;
  var char = str.charAt(0);
  var count = 1;

  for (var i = 1; i < str.length; i++) {

    if (str[i] !== char) {
      index = setChar(compressedStrArray, index, char, count);
      char = str[i];
      count = 1;
    } else {
      count++;
    }
  }
  setChar(compressedStrArray, index, char, count);
  var compressedStr = compressedStrArray.join('');

  return console.log(str, compressedStr.length >= str.length ? str : compressedStr);
};


console.log("------------------------------");
compressedString("aaabcccccccaaa");
compressedString("eeemmmdddllssr");
compressedString("pppdddssncczz");
compressedString("aa");
compressedString("aaa");
