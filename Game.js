//Game.js

function boat(){
 
 this.x = 0;
 this.y = 0;
 this.vx = 0;
 this.points = [];
  
}

boat.prototype.draw = function(ctx){
  
  ctx.save();
  ctx.beginPath();
  for (var i = 0; i < this.points/2; ++i){
    ctx.lineTo(this.points[i * 2], this.points[(i * 2) + 1]);
  }
  ctx.strokeStyle = "#000";
  ctx.stroke();
  ctx.restore();
  
}

var boats={};

boats.rowBoat = [0,10,5,13,10,14,15,13,20,0];

