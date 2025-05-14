import { size } from "./main.js";

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
}