"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
export {};
ctx.lineWidth = 1;
let levels = 14;
function drawLine(x1: number, y1: number, x2: number, y2: number) {
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
}

function drawTree(x1: number, y1: number, angle: number, levels: number) {
  if (levels > 0) {
    var x2 = x1 + Math.cos((angle * Math.PI) / 180.0) * levels * 7.0;
    var y2 = y1 + Math.sin((angle * Math.PI) / 180.0) * levels * 7.0;
    drawLine(x1, y1, x2, y2);
    drawTree(x2, y2, angle - 15, levels - 1);
    drawTree(x2, y2, angle + 15, levels - 1);
  }
}

function finalDraw() {
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  drawTree(canvas.width / 2, canvas.height, -90, levels);
  ctx.closePath();
  ctx.stroke();
}
finalDraw();
