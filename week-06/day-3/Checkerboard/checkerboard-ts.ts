'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern
const size: number = 40;
for(let i = 0; i < 4; i++){
    for(let y = 0; y < 8 ; y++){ //first row of black boxes
        if(y % 2 == 0){
            ctx.fillRect(y * size, i*2*size, size, size);
        }else{
            undefined;
        }
    }
    for(let x = 0; x < 8 ; x++){ //second row of black boxes
        if(!(x % 2 == 0)){
            ctx.fillRect(x * size, (i*2*size) + size, size, size);
        }else{
            undefined;
        }
    } 
}
//another solution from web
let sizeOfBox: number = 8;

function drawRectangle(x: number, y: number): void {
    ctx.fillStyle = "purple";
    ctx.fillRect(x, y, 20, 20);
}

let xAxis: number = 10;
let yAxis: number = 10;

for (let j: number = 0; j < sizeOfBox; j++) {
  for (let i: number = 0; i < sizeOfBox/ 2; i++) {
    drawRectangle(xAxis, yAxis);
    xAxis += 40;
  }
  if (j % 2 === 0) {
    xAxis = 30;
  } else {
    xAxis = 10;
  }
  yAxis += 20;
}