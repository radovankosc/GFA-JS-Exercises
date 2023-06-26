'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas

let squareSize = 10;
ctx.fillRect( 
  canvas.width / 2 - squareSize / 2,
  canvas.height / 2 - squareSize / 2,
  squareSize,
  squareSize
);
ctx.fillStyle = "green";
