import { grid, s, size, _width, squareSize } from './main.js';

export function drawRects(p) {
    for (let i = 0; i < grid.length; i++) {
        p.rect(s * (i % size), s * Math.floor(i / size), s);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(s * 0.5);
        p.text(grid[i].number, s * (i % size) + s / 2, s * Math.floor(i / size) + s / 2);
    }
}

export function drawLines(p) {
    for (let i = 0; i < grid.length; i+=squareSize) {
        p.push();
        p.strokeWeight(4);
        p.line(s * i, 0, s * i, _width);
        p.line(0, s * i, _width, s * i);
        p.pop();
    }
}