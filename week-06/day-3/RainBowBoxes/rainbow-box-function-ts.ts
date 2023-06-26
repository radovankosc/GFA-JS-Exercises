'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
let arrayOfColors: string[] = [
  'rgb(255,0,0)',
  'rgb(255,127,0)',
  'rgb(255,255,0)',
  'rgb(0,255,0)',
  'rgb(0,0,255)',
  'rgb(75,0,130)',
  'rgb(148,0,211)'
];

function drawSquare (size: number, color: string): void {
    ctx.fillStyle = color;
    ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size);
    ctx.stroke();
}

for(let i = 0; i < arrayOfColors.length; i++ ){
    drawSquare(250 - i * 25, arrayOfColors[i]);
}