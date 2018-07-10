// function where(arr, num) {
//     arr.push(num);
//     arr.sort(function(a,b){
//         return a-b;
//     })
//     return arr.indexOf(num);
//   }
  
//  var num =  where([40, 60], 50);
//  alert(num);
  

function temp(a,b){
    return a-b;
}

function where(arr,num){
    arr.push(num);
    arr.sort(temp);
    return arr.indexOf(num);
}
var num =  where([40, 60], 50);
alert(num);