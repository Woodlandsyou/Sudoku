import { columnInteratorGenerator, rowIteratorGenerator, boxIteratorGenerator } from "./Iterators.js";
import { f, grid, size, squareSize } from "./main.js";

export class Cell {
    constructor(x, y) {
        this.d = {x: x, y: y};
        this.indices = (() => {
            let a = [];
            for(let i = 0; i < size; i++) a.push(i + 1);
            return a;
        })();
        this.number = "";
    }

    fillNumbers() {
        this.number = this.indices[Math.floor(Math.random() * this.indices.length)];

        try {
            let columnIterator = columnInteratorGenerator(this.d.x);
            this.removeIndex(columnIterator);
    
            let rowIterator = rowIteratorGenerator(this.d.y);
            this.removeIndex(rowIterator);
    
            let boxIterator = boxIteratorGenerator(this.d.x, this.d.y);
            this.removeIndex(boxIterator);

        } catch(err) {
            const current = parseInt(err.message);
            let columnIterator = columnInteratorGenerator(current.d.x);
            
            let rowIterator = rowIteratorGenerator(current.d.y);
    
            let boxIterator = boxIteratorGenerator(current.d.x, current.d.y);
        }
    }

    removeIndex(Iterable) {
        for (const i of Iterable) {
            const index = grid[i].indices.indexOf(this.number);
            if(index >= 0) {
                grid[i].indices.splice(index, 1);                
            }
            if(!grid[i].indices.length && !grid[i].number) throw new Error(i);
            // console.log(grid[i], this.number);
        }
    }

    addIndex(Iterable) {
        for (const i of Iterable) {
        }
    }
}