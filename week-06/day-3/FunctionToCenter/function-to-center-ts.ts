'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center
function drawLine(x: number, y:number): void {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();    
}
for(let i = 0; i <= canvas.width; i += 20){
    drawLine(i, 0);
    drawLine(i, canvas.height);
}
for(let j = 0; j <= canvas.height; j += 20){
    drawLine(0, j);
    drawLine(canvas.width, j);
}
