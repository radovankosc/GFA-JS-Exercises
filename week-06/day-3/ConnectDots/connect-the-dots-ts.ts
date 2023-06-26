'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]
function connectTheDots(listOfDots: number[][]): void {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(listOfDots[0][0], listOfDots[0][1]);
    for (let i: number = 1; i < listOfDots.length; i++) {
        ctx.lineTo(listOfDots[i][0], listOfDots[i][1]);
    }
    ctx.lineTo(listOfDots[0][0], listOfDots[0][1]); // just to make sure it returns to the origin
    ctx.stroke();
}
    
let firstList: any[] = [
    [10, 10],
    [290, 10],
    [290, 290],
    [10, 290],
];
let secondList: any[] = [
    [50, 100],
    [70, 70],
    [80, 90],
    [90, 90],
    [100, 70],
    [120, 100],
    [85, 130],
    [50, 100],
];    
connectTheDots(firstList);
connectTheDots(secondList);
