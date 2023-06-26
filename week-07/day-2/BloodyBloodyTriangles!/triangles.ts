"use strict";
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
export {};
// if high od canvas = 330
// function drawTriangle(
//   x0: number,
//   y0: number,
//   x1: number,
//   y1: number,
//   x2: number,
//   y2: number
// ): void {
//     ctx.beginPath();
//     ctx.moveTo(x0, y0);
//     ctx.moveTo(x1, y1);
//     ctx.moveTo(x2, y2);
//     ctx.stroke();
// }

// function drawLine(x1: number, y1: number, x2: number, y2: number): void {
//   ctx.beginPath();
//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.stroke();
// }
// let beginY: number = 30;
// for (let i = 0; i < canvas.height; i += 10) {
//   drawLine(
//     0 + i / 2,
//     canvas.height - beginY - i,
//     canvas.width - i / 2,
//     canvas.height - beginY - i
//   );
//   drawLine(0 + i, canvas.height - beginY, canvas.width / 2 + i / 2, 0 + i);
//   drawLine(
//     canvas.width - i,
//     canvas.height - beginY,
//     canvas.width / 2 - i / 2,
//     i
//   );
// }

//another solution
function drawLine(x1: number, y1: number, x2: number, y2: number): void {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
let beginY: number = 30;
let heightOfTrianlge: number = 8.66; //for x Axis
let edgeOfTrianlge: number = 10; // for y Axis
for (let i = 0; i < canvas.height; i++) {
  drawLine(
    0 + (i * heightOfTrianlge) / 2,
    canvas.height - beginY - i * heightOfTrianlge,
    canvas.width - (i * edgeOfTrianlge) / 2,
    canvas.height - beginY - i * heightOfTrianlge
  );
  drawLine(
    0 + i * heightOfTrianlge,
    canvas.height - beginY,
    canvas.width / 2 + (i * heightOfTrianlge) / 2,
    0 + i * edgeOfTrianlge
  );
  drawLine(
    canvas.width - i * heightOfTrianlge,
    canvas.height - beginY,
    canvas.width / 2 - (i * heightOfTrianlge) / 2,
    i
  );
}
