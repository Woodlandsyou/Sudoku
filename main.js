import { drawLines, drawRects } from "./draw.js";
import { Cell } from "./Cell.js";
import * as iterators from "./Iterators.js"

export const squareSize = 3, _width = 600;
export const size = Math.pow(squareSize, 2), s = _width / size;
export const f = (() => {
    let a = [];
    for (let i = 0; i < squareSize * squareSize - 1; i++) {
        if(i % squareSize === squareSize - 1) a.push(squareSize * (squareSize - 1) + 1);
        else a.push(1);
    }
    return a;
})();
export let grid = createGrid(size);

window.grid = grid;
window.iterators = iterators;
window.f = f;

function createGrid(length) {
    let a = [];
    for (let i = 0; i < length * length; i++) {
        a.push(new Cell(i % size, Math.floor(i / size)));
    }
    return a;
}

function setNumbers(i) {
    const current = grid[i];
        if(current.number != undefined) {
            current.number
        }
        let rI = iterators.rowIteratorGenerator(current.d.y);
        
        return i;
}

const game = p => {

    p.setup = () => {
        p.createCanvas(_width, _width);
        for (let i = 0; i < grid.length; i++) {
            i = setNumbers(i);
            drawRects(p);
            drawLines(p);
        }
    }
}

let sudokuInstance = new p5(game);