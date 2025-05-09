import { size, squareSize, f } from "./main.js";

export function* columnInteratorGenerator(column) {
    for (let i = 0; size * i + column < size * size; i++) {
        yield size * i + column;
    }
}

export function* rowIteratorGenerator(row) {
    for (let i = 0; size * row + i < size * (row + 1); i++) {
        yield size * row + i;
    }
}

export function* boxIteratorGenerator(pos) {
    const { x, y } = pos;
    const box = (() => {
        let a = y * size + x;
        let temp = (a - a % squareSize) / squareSize;
        let i = 0;
        while (!!(temp % squareSize) || temp >= size) {
            temp -= f[i];
            i++;
        }
        return i;
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
        yield sigma(indexInSquare) + squareSize * sigma(indexOfSquare);
    }
}