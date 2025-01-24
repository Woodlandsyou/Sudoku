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
let c = 0;
window.increase = (r = c) => {
    c = r;
    grid[c].fillNumbers();
    c++;
}

function createGrid(length) {
    let a = [];
    for (let i = 0; i < length * length; i++) {
        a.push(new Cell(i % size, Math.floor(i / size)));
    }
    return a;
}

const game = p => {

    p.setup = () => {
        p.createCanvas(_width, _width);
        grid.forEach(e => e.fillNumbers());
    }
    
    p.draw = () => {
        drawRects(p);
        drawLines(p);
    }
}

let sudokuInstance = new p5(game);