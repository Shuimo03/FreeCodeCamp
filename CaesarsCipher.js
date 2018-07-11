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
    var result = ""; //保留字符串
    for(var i = 0 ;i<str.length;i++){
            var currenCode = str[i].charCodeAt();
            if(currenCode>90 || currenCode<65)
            {
                result+=String.fromCharCode(currenCode);
            }
            else if(currenCode<78)
            {
                result+=String.fromCharCode(currenCode+13);
            }
            else
            {
                result+=String.fromCharCode(currenCode-13);
            }
    }
    return result;
}

var text = rot13("serr pbqr pnzc");
alert(text);
