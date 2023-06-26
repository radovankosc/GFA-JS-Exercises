"use strict";
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
export {};

function drawLine(x1: number, y1: number, x2: number, y2: number): void {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = "green";
  ctx.stroke();
}
for (let x = 10; x < canvas.width / 2; x += 10) {
  drawLine(canvas.width / 2 + x, canvas.height / 2, canvas.width / 2, 0 + x); //right top
  drawLine(
    canvas.width / 2 + x,
    canvas.height / 2,
    canvas.width / 2,
    canvas.height - x
  ); // right bottom
}
for (let x = 10; x <= canvas.width / 2; x += 10) {
  //added <= fot to make vertical line in the midle
  drawLine(x, canvas.height / 2, canvas.width / 2, canvas.height / 2 - x); //left-top
  drawLine(x, canvas.height / 2, canvas.width / 2, canvas.height / 2 + x); //left-bottom
}
