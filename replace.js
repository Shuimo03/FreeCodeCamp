// var str = '0_0 (: /-\ :) 0-0';
// var newstr = str.toLocaleLowerCase().replace(/[\W_]/g,' ');
// /**
//  * g 全局替换
//  * 多个参数:(/[\'替换参数','替换参数']/g)
//  */
// alert(str);
// alert(newstr);

function palindrome(str) {
    var newstr = str.replace(/[\W_]/g,' ').toLowerCase();
   var reverstr = newstr.split('').reverse().join('');
   return newstr === reverstr;
}

var Test = palindrome("0_0 (: /-\ :) 0-0");
alert(Test);
  
  