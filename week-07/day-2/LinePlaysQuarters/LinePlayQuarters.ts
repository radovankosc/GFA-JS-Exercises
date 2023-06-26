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
function quaters(quatersCount: number): void {
  let position: number = canvas.width / quatersCount; //300/6 = 50!!!
  for (let y: number = 0; y < quatersCount; y++) {
    //6 squares in 1 row
    for (let x: number = 0; x < quatersCount; x++) {
      //6 squares in 1 column
      for (let g: number = 0; g < position; g += 5) {
        //g: 0-50 after every 5 (5,10,15,20....), executes 10 x
        drawLine(
          0 + x * position,
          g + y * position,
          g + x * position,
          position + y * position,
          "green"
        );
        for (let p: number = 0; p < position; p += 5) {
          drawLine(
            p + x * position,
            0 + y * position,
            position + x * position,
            p + y * position,
            "purple"
          );
        }
      }
    }
  }
}

quaters(6);
