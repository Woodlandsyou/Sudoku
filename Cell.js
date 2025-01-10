import { grid, size, squareSize } from "./main.js";

export class Cell {
    constructor(x, y) {
        this.d = {x: x, y: y};
        this.index = (() => {
            let a = [];
            for(let i = 0; i < size; i++) a.push(i + 1);
            return a;
        })();

        this.number = this.index[Math.floor(Math.random() * this.index.length)];
        this.columnInterator();
        this.rowIterator();
        // this.boxIterator();
    }

    columnInterator() {
        for (let i = 0; size * i + this.d.x < size * size; i++) {
            const iter = size * i + this.d.x;
            grid[iter].index.splice(grid[iter].index.indexof(this.number), 1);
        }
    }

    rowIterator() {
        for (let i = 0; size * this.d.y + i < size * (this.d.y + 1); i++) {
            const iter = size * this.d.y + i;
            grid[iter].index.splice(grid[iter].index.indexof(this.number), 1);
        }
    }

    boxIterator(box) {
        let f = (() => {
            let a = [];
            for (let i = 0; i < squareSize * squareSize - 1; i++) {
                if(i % squareSize === squareSize - 1) a.push(squareSize * (squareSize - 1) + 1);
                else a.push(1);
            }
            return a;
        })();
    
        for (let i = 0; i < squareSize * squareSize; i++) {
            let indexInSquare = f.slice(0, i);
            let indexOfSquare = f.slice(0, box);
            
            let sigma = array => {
                try {
                    return array.reduce((accu, current) => accu + current)
                } catch (error) {
                    return 0;
                }
            };

            const iter = sigma(indexInSquare) + squareSize * sigma(indexOfSquare);
            grid[iter].index.splice(grid[iter].index.indexof(this.number), 1);
        }
    }
}