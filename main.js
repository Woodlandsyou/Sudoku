const vw = window.innerWidth, vh = window.innerHeight;
const sudokuContainer = document.getElementById('sudokuContainer');
sudokuContainer.style.width = vw <= vh ? vw * 0.95 + 'px':vh * 0.95 + 'px';
sudokuContainer.style.height = sudokuContainer.style.width;

const size = 2;
const _width = sudokuContainer.offsetWidth, _height = sudokuContainer.offsetHeight;
const s = _width <= _height ? _width / Math.pow(size, 2):_height / Math.pow(size, 2);

const sudoku = new Array(Math.pow(size, 2));

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.div = createDiv(sudokuContainer, this.x * Math.pow(size, 2) + this.y + 1);
        this.indeces = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.number = this.indeces[Math.floor(Math.random() * this.indeces.length)];
    }

    get number() {
        return this._number;
    }

    set number(val) {
        this._number = val;
        this.div.children[0].textContent = this._number;
    }
}

makeArray();

function makeArray() {
    for (let i = 0; i < Math.pow(size, 2); i++) {
        sudoku[i] = new Array(Math.pow(size, 2));
        for (let j = 0; j < Math.pow(size, 2); j++) {
            sudoku[i][j] = new Cell(i, j);
        }
    }
}

function createDiv(parent, content) {
    const e = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = content;
    e.appendChild(p);
    e.style.width = s - 1 +'px';
    e.style.height = s +'px';
    e.classList.add('item');
    return parent.appendChild(e);
}

function fillSudoku() {

}