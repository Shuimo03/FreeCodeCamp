function chunk(arr, size) {
    
    var result = [];

    for(var i = 0; i<arr.length;i+=size)
    {
        
        var temp = [];
            for(var j = i; j<i+size; j++){

                if(j<arr.length){
                    temp.push(arr[j]);
                }
            }
            result.push(temp);
    }
    return result;
  }
  var text = chunk(["a", "b", "c", "d"], 2);
  alert(text);