//Math.js
//
//Corbbin Goldsmith
//
//National Aeronautics and Space Administration
//
//Copyright 2013
//
//Purpose: for shortening up the writing time of 
//		   JavaScript code using complex mathem-
//		   atics.
//
//Details: Building all code from the ground up.
//		   
//Assissted by Garett Jernigan

function avg(num1, num2){

	return (num1 + num2) /2;

}

function pt2d(x,y){
	return{x: x, y: y}; //return the values you input, but to an array.
}

function pt3d(x,y,z){
	return{x: x, y: y, z: y}; //return a 3d point as an array
}

//convert
function mm2msec(x){

	return x/3433.2672;

}

function msec2hz(x){

	return 1000/x;

}

//space

//calc dist
//sends out the distance of all items in an array

function calcDist(pt1, a, fact){

	if (fact === undefined){fact=1};
	var out= [];
	for (var i = 0; i < a.length; ++i){
	
		out.push(dist(pt1, a[i]) * fact);
		
	}
	return out;
	
}

function dist(pt1, pt2){
	var dx = (pt2.x - pt1.x); //delta x
	var dy = (pt2.y - pt1.y); //delta y
	return Math.sqrt(sqr(dx) + sqr(dy)); //the square root of the sum of the 
}										 //distance of x1 and y1, and x2, and y2

function rectMake(x,y,width,height){
	return {x: x, y: y, width: width, height: height};
}

function rect(){

	this.x = 0;
	this.y = 0;
	this.width = 100,
	this.height = 1000;
	this.bounds = [];
	this.center = [];

}

function arrayAvg(a){	
	var d = 0; 
	for (var i = 0; i < a.length; ++i){
	
		d += a[i];
	
	}
	d /= a.length;
	return d;
}

rect.draw=function(ctx){

	this.bounds=rectMake(this.x, this.y, this.width, this.height);
	ctx.save();
	ctx.fillRect(this.bounds);
	this.center = pt2d(getCenter(bounds)); 
	ctx.restore();

}

function getCenter(rect){
	return pt2d((rect.x + rect.width) /2, (rect.y + rect.height) / 2);
}

function sqr(value){
	return value * value;
}

function makeColor(vec){
	
	return "#" + vec.x.toString(16) + vec.y.toString(16) + vec.z.toString(16);
}

function drawPoint(pt,ctx){ //x, y, context
	ctx.save();
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(pt.x,pt.y,3,0,Math.PI*2,true);
	ctx.stroke();
	ctx.fill();
	ctx.restore();
}

function pointInImg(x,y,imgdata,width,newValue){

	return (y * width + x) * 4;

}

function dist3d(vec1, vec2){

	

}

function rAvg(data, factor){ //running average of an array

	var avg = 0, out= [];
for (var i = 0; i < data.length - factor; ++i){
	avg = 0;
	if (i < Math.round(factor / 2)){
		out[i] = 0;
	}
	if (i == Math.round(factor / 2)){
		for (var j = 0; j < factor; ++j){
		
			avg += data[j +i];
		
		}
		out.push(avg);
	}
	if (i > Math.round(factor / 2)){
		out[i] = data[i] - out[i - (factor/2)] ;
	}
	//avg/=factor;
	
}
return out;

}

function drawArray(ctx,a,rect){

	ctx.save();
	ctx.beginPath();
	ctx.moveTo(-1,rect.height / 2);
	for (var i = 0; i < a.length; ++i){
		ctx.lineTo((rect.width / a.length) * i, a[i] * rect.height);
	}
	ctx.stroke();
	ctx.restore();

}














