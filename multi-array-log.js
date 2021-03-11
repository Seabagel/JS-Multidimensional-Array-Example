var text = "";

var arrX = ["abc","defg","h","ijk","l","mnop"];
var arrY = ["123","456","789"];
var arrZ = [arrX,arrY,true,false];

function getArrayLetter(someArray){
  var arrT = "";
  for (i = 0; i < someArray.length; i++){
    if (Array.isArray(someArray[i])){
      for (j = 0; j < someArray[i].length; j++){
        if (someArray[i][j].length > 1) {
          for (k = 0; k < someArray[i][j].length; k++){
            arrT += someArray[i][j][k];       
          }
        }  
      }
    } else {
      arrT += someArray[i];
    }
  }
  return arrT;
}


// for (i = 0; i < arrZ.length; i++){
//   if (Array.isArray(arrZ[i])){
//     for (j = 0; j < arrZ[i].length; j++){
//       if (arrZ[i][j].length > 1) {
//         for (k = 0; k < arrZ[i][j].length; k++){
//           text += arrZ[i][j][k] + "<br>";
//         }
//       } else {
//         text += "nope <br>";
//       }
      
//     }
//   } else {
//     text += "nope <br>";
//   }
// }

document.getElementById("text").innerHTML = text;