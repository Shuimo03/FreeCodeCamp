// var str = "Bastian";
// var test = ("(6)"+str.substr(length-1));

// alert(test);

function confirmEnding(str, target) {
        return str.substr(-target.length) === target;
  }

  var test = confirmEnding("He has to give me a new name","name");
  alert(test);