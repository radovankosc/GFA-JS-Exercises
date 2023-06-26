
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of color)
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawStar (x: number, y: number, size: number): void {
    let color = Math.random() * 255;
    ctx.fillStyle = `rgba(${color}, ${color}, ${color})`;
    ctx.fillRect(x * Math.random() * 100, y * Math.random() * 100, size, size);
}
for ( let i = 1; i < 777; i ++){
drawStar(i * Math.random(), i * Math.random(), 10 * Math.random());    
}