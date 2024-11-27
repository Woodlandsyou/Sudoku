import { drawLines, drawRects } from "./draw.js";
import { Cell } from "./Cell.js";

export const squareSize = 2, _width = 400;
export const size = Math.pow(squareSize, 2), s = _width / size;
export let grid = createGrid(size);

function createGrid(length) {
    let a = [];
    for (let i = 0; i < length * length; i++) a.push(new Cell(i));
    return a;
}

const game = p => {

    p.setup = () => {
        p.createCanvas(_width, _width);
        drawRects(p);
        drawLines(p);
    }
}

let sudokuInstance = new p5(game);