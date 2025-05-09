import { boxIteratorGenerator, columnInteratorGenerator, rowIteratorGenerator } from "./Iterators.js";
import { grid, size, current } from "./main.js";

export class Cell {
    constructor(x, y) {
        this.pos = {x: x, y: y};
        this.indices = (() => {
            let a = [];
            for(let i = 0; i < size; i++) a.push(i + 1);
            return a;
        })();
        this.number = "";
    }

    setNumber() {
        this.number = this.indices[Math.floor(Math.random() * this.indices.length)];

        let cI = columnInteratorGenerator(this.pos.x);
        this.removeIndex(cI);

        let rI = rowIteratorGenerator(this.pos.y);
        this.removeIndex(rI);

        let bI = boxIteratorGenerator(this.pos);
        this.removeIndex(bI);
        return this.number;
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