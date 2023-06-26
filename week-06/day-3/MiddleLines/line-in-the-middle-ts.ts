'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

ctx.beginPath();
ctx.moveTo(canvas.width / 2, 0);
ctx.lineTo(canvas.width / 2, canvas.height / 2);
ctx.strokeStyle = "rgba(255, 0, 0, 1)";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, canvas.height / 2);
ctx.lineTo(canvas.width / 2, canvas.height / 2);
ctx.strokeStyle = "rgba(0, 255, 0, 1)";
ctx.stroke();




// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the center of the canvas
// draw a green vertical line to the center of the canvas