import { grid, size } from "./main.js";

export class Cell {
    constructor(x, y) {
        this.pos = {x: x, y: y};
        this.indices = (() => {
            let a = [];
            for(let i = 0; i < size; i++) a.push(i + 1);
            return a;
        })();
        this.number = undefined;
    }

    removeIndex(iterable) {
        let r = [];
        for (const i of iterable) {
            if(grid[i] === this) continue;
            const index = grid[i].indices.indexOf(this.number);
            if(index >= 0) grid[i].indices.splice(index, 1);
            r.push(grid[i]);
        }
        return r;
    }
}