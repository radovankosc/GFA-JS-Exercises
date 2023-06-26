"use strict";
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
export {};

function drawLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string
): void {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.stroke();
}
for (let i = 20; i < canvas.width; i += 20) {
  drawLine(i, canvas.height, 0, i, "green"); //how to decrease y2 if from left top - 60 ???
}
for (let i = canvas.height - 20; i > 0; i -= 20) {
  drawLine(canvas.width, i, i, 0, "purple"); //how to decrease y2 if from left top - 60 ???
}

//another solution with indetation from left top of 40
for (let i = 20; i < canvas.height; i += 20) {
  drawLine(0, 40 + i, i, canvas.height, "green");
  drawLine(i + 40, 0, canvas.width, i, "purple");
}
