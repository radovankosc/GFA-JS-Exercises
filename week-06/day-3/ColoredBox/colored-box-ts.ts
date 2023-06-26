'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 200);
ctx.strokeStyle = "rgba(140, 0, 145, 1)";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(200, 200); //it starts from the end of pointed above
ctx.strokeStyle = "rgba(0, 255, 186, 1)";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 50); //it starts from the end of pointed above
ctx.strokeStyle = "rgba(254, 242, 8, 1)";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(50, 50); //it starts from the end of pointed above
ctx.strokeStyle = "rgba(0, 0, 0, 1)";
ctx.stroke();
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge