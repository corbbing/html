//mathUtils.js

/*
 * Copyright (C) 2013 Corbbin Goldsmith.
 * This code is to make math a bit quicker when dealing with complex
 * numbers
 *
 * License:
 *
 * Permission is hereby granted, free of charge, to any person 
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * The Software may not be used to create training material of any sort,
 * including courses, books, instructional videos, presentations, etc.
 * without the express written consent of David Geary.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
*/

//This document will be heavily documented for full clarity


function pt2d(x,y){
  return{x: x, y: y}; //return the values you input, but to an array.
}

function pt3d(x,y,z){
	return{x: x, y: y, z: y}; //return a 3d point as an array
}

//convert millemeters to milleseconds by the speed of sound

function mm2msec(x){

	return (x) / 3433.2672;

}

function msec2hz(x){

	return 1000/x;

}

//space

//calc dist
//sends out the distance of all items in an array

// I will be using this function to calculate the distance of
//objects and then calculating the speed of sound for the distance

function calcDist(pt1, a){

	var out= [];
	for (var i = 0; i < a.length; ++i){
	
		out.push(dist(pt1, a[i]));  
		
	}
	return out;
	
}

function dist(pt1, pt2){
	var dx = (pt2.x - pt1.x); //delta x
	var dy = (pt2.y - pt1.y); //delta y
	return Math.sqrt(sqr(dx) + sqr(dy)); //the square root of the sum of the 
}										 //distance of x1 and y1, and x2, and y2

function rectMake(x,y,width,height){
	return {x: x, y: y, w: width, h: height};
}

function rect(){

	this.x = 0;
	this.y = 0;
	this.width = 100,
	this.height = 1000;
	this.bounds = [];
	this.center = [];

}

function drawRect(rect){
	
}

rect.draw=function(ctx){

	this.bounds=rectMake(this.x, this.y, this.width, this.height);
  //this.bounds will make it easier to access the values for collision testing, if needed.
	ctx.save();
	ctx.fillRect(this.bounds);
	this.center = pt2d(getCenter(bounds)); 
	ctx.restore();

}

function getCenter(rect){
	return pt2d((rect.x + rect.width) /2, (rect.y + rect.height) / 2);
  //calculates the center of a rectangle.
}

function sqr(value){
	return value * value;
  //x ^ 2
}

function makeColor(vec){
	
	return "#" + vec.x.toString(16) + vec.y.toString(16) + vec.z.toString(16);
}

function drawPoint(pt,ctx){ //x, y, context
	ctx.save();
	ctx.fillStyle = makeColor(pt3d(0,0,0));
	ctx.beginPath();
	ctx.arc(pt.x,pt.y,3,0,Math.PI*2,true);
	ctx.stroke
	ctx.fill();
	ctx.restore();
}

function pointInImg(x,y,imgdata,width,newValue){

	return (y * width + x) * 4;

}

function dist3d(vec1, vec2){

	

}
