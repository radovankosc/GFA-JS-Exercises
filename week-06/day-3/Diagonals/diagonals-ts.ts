'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
function drawLine(x1: number, y1:number, x2: number, y2:number ): void {
 if( x1 === 0 && y1 === 0){
    ctx.strokeStyle = "rgba(0, 255, 0, 1)";    
 }else{
    ctx.strokeStyle = "rgba(255, 0, 0, 1)";      
 }
ctx.beginPath()
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
}

//drawLine(0, 0, 600, 400);
//drawLine(600, 0, 0, 400);

drawLine(0, 0, canvas.width, canvas.height);
drawLine(canvas.width, 0, 0, canvas.height);

// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function