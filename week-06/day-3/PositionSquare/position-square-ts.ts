'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws one square
// Parameters: the x and y coordinates of the square's top left corner
// The function shall draw a 50x50 square from that point
// Draw 3 squares with that function
// Avoid code duplication!

function drawSquare(x: number, y:number): void {
    ctx.fillRect(x, y, 50, 50);
}
for(let i = 0; i < 3; i++){
    drawSquare(Math.random()* 450, Math.random()* 400 );
}
