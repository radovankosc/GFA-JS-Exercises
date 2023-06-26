'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]
const size: number = 20;
for( let i = 0 * size; i < size - 1; i++){
    for(let j = 0 * size; j < 20 * size; j++){
        if(j === i){
            ctx.fillStyle = "purple";
            ctx.fillRect(i * size, j * size, size, size);
            ctx.strokeStyle = "blue";
            ctx.strokeRect(i * size, j * size, size, size);            
        }
    }
}

//another simple soultion from web... not so sophisticated and playble as my up above
function drawRectangle(x: number, y: number, size: number): void {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, size, size);
  ctx.strokeRect(x, y, size, size);
}
for (let i: number = 0; i < 20; i++) {
  drawRectangle(i * 20, i * 20, 20);
}