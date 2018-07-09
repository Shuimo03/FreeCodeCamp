function mutation(arr) {
    var scoure = arr[0].toLowerCase();
    var target = arr[1].toLowerCase();

    for(var i = 0; i<target.length;i++){
        if(scoure.indexOf(target[i])===-1){
            return false;
        }
    }
    return true;
  }