//CGCanvas.js

//Access the canvas' "imageData.data" and change the value.



function imgDataGet(x,y,ctx){
 
 imgDat = ctx.getImageData(x,y,1,1);
 return imgDat.data;
  
}

function makeRgbaColor(){
  
}

function imgDataGet(x,y,ctx,vArray){
 imgDat = ctx.getImageData(x,y,1,1);
 imgDat.data = vArray;
 ctx.putImageData(imgDat,x,y);
}
