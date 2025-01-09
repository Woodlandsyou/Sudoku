import { size } from "./main.js";
import { boxIterator, columnInterator, rowIterator } from "./Interartors.js";


export class Cell {
    constructor() {
        this.index = (() => {
            let a = [];
            for(let i = 0; i < size; i++) a.push(i + 1);
            return a;
        })();

        this.number = this.index[Math.floor(Math.random() * this.index.length)];

    }
}