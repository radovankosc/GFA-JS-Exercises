'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!
function drawRectangle (): void {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height; 
    let w = Math.random() * 100;
    let h = Math.random() * 200;
    ctx.fillRect(x, y, w, h);
    let a: number = Math.random() * 255;
    let b: number = Math.random() * 255;
    let c: number = Math.random() * 255;
    ctx.fillStyle = `rgba(${a}, ${b}, ${c})`;
    ctx.stroke();
}
for(let i = 0; i < 4; i++){
drawRectangle();
}
