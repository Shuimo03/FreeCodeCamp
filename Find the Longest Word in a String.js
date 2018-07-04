function findLongestWord(str) {
    var StrArray = str.split(" ");
    var length = 0;
    for(var i = 0; i<StrArray.length;i++)
    {
        if(StrArray[i].length>length)
        {
           length = StrArray[i].length;
        }
    }
        return length;
  }
  
  var str = "The quick brown fox jumped over the lazy dog";
  var Test =  findLongestWord(str);
  alert(Test);