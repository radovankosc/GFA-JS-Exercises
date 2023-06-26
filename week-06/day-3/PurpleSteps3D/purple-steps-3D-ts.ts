'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
function drawSquare (x: number, y: number, w: number, h:number){
    ctx.fillStyle = "purple";
    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
}
let xAxis: number = 10;
let yAxis: number = 10;
for(let i = 0; i < 7; i++){
    drawSquare(xAxis, yAxis, 10 * i, 10 * i);
    xAxis += i * 10;
    yAxis += i * 10;
}