const vw = window.innerWidth, vh = window.innerHeight;

const sudokuContainer = document.getElementById('sudokuContainer');
sudokuContainer.style.width = vw <= vh ? vw * 0.9 + 'px':vh * 0.9 + 'px';
sudokuContainer.style.height = sudokuContainer.style.width;

const cols = 4, rows = cols;
const _width = sudokuContainer.offsetWidth, _height = sudokuContainer.offsetHeight;
const s = _width <= _height ? _width / cols:_height / cols;

const sudoku = new Array(cols);

class Cell {
    constructor(x, y) {
        this.y = x;
        this.y = y;
        this.indeces = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.number = undefined;
    }
}

createDivs();

function createDivs() {
    for (let i = 0; i < cols; i++) {
        sudoku[i] = new Array(rows);
        for (let j = 0; j < rows; j++) {
            createDiv(sudokuContainer, i, j);
        }
    }
}

function createDiv(parent, i, j) {
    const e = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = i * rows + j;
    e.appendChild(p);
    e.style.width = s - 1 +'px';
    e.style.height = s +'px';
    e.classList.add('item');
    parent.appendChild(e);
}