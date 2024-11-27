import { size, squareSize } from "./main.js";

export function columnInterator(column) {
    for (let i = 0; size * i + column < size * size; i++) {
        console.log(size * i + column);    
    }
}

export function rowIterator(row) {
    for (let i = 0; size * row + i < size * (row + 1); i++) {
        console.log(size * row + i);
    }
}

export function boxIterator(box) {
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
        console.log(sigma(indexInSquare) + squareSize * sigma(indexOfSquare));
    }
}