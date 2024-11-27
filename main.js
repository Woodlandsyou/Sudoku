import { drawLines, drawRects } from "./draw.js";
import { Cell } from "./Cell.js";
import { boxIterator, columnInterator, rowIterator } from "./Interartors.js";

export const squareSize = 3, _width = 600;
export const size = Math.pow(squareSize, 2), s = _width / size;
export let grid = createGrid(size);

window.grid = grid;

function createGrid(length) {
    let a = [];
    for (let i = 0; i < length * length; i++) a.push(new Cell(i));
    return a;
}

const game = p => {

    p.setup = () => {
        p.createCanvas(_width, _width);
    }
    
    p.draw = () => {
        drawRects(p);
        drawLines(p);
    }
}

let sudokuInstance = new p5(game);

boxIterator(5);
console.log('-------------------------');
columnInterator(8);
console.log('-------------------------');
rowIterator(7);