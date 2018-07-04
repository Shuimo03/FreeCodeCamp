// function palindrome(str){
//     str = str.toLowerCase();
//     var symbols = /\W+|_/g;
//     str = str.replace(symbols, "");
//     var newString = str.split(" ").reverse().join("");

//     if(newString === str){
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

function palindrome(str) {
    var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
    var reverseStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reverseStr;
  }

  var Test = palindrome("0_0 (: /-\ :) 0-0");
  alert(Test);