function repeat(str, num) {
    var result = "";
   for(var i = 0; i<num; i++){
        result+=str;
    }
    return result;
  }

 var text =  repeat("abc", 3);
 alert(text);

