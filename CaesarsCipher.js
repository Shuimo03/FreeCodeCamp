/**
 * A:65
 * Z:90
 * 
 * 每次移动13个数字
 */

// function rot13(str){
    
//     var result = "";

//     for(var i  = 0; i<str.length; i++){
//         var currenCode = str[i].charCodeAt();
//         if(currenCode.toLowerCase())
//         {}
//         else if(currenCode < 78)
//         {
//             result+=String.fromCharCode(currenCode+13);
//         }
//         else
//         {
//             result+=String.fromCharCode(currenCode-13);
//         }
//     }
//     return result;
// }

// var text = rot13("serr pbqr pnzc");
// alert(text);

function rot13(str){
    var result = "";
    for(var i = 0; i<str.length; i++){
        var currenCode = str[i].charCodeAt();
        switch(currenCode.toUpperCase())
        {
            case currenCode<78:result+=String.fromCharCode(currenCode+13);break;
            case currenCode>78:result+=String.fromCharCode(currenCode-13);break;
        }
    }
    return result;
}
var text = rot13("serr pbqr pnzc");
alert(text);
