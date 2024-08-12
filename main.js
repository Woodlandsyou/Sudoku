const vw = window.innerWidth, vh = window.innerHeight;
const sudokuContainer = document.getElementById('sudokuContainer');
sudokuContainer.style.width = vw <= vh ? vw * 0.95 + 'px':vh * 0.95 + 'px';
sudokuContainer.style.height = sudokuContainer.style.width;

const size = 2, modes = ['inspect', 'delete', 'insert', 'insert node'];
const _width = sudokuContainer.offsetWidth, _height = sudokuContainer.offsetHeight;
const s = _width <= _height ? _width / Math.pow(size, 2):_height / Math.pow(size, 2);

const sudoku = new Array(Math.pow(size, 2));

let mode = modes[0];

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.div = createDiv(sudokuContainer, this.x * Math.pow(size, 2) + this.y + 1);
        this.div.classList.add(`item-modsize-${this.x % size}-x`);
        if(this.x === Math.pow(size, 2) - 1) this.div.classList.add('last-item-x');
        if(this.y === Math.pow(size, 2) - 1) this.div.classList.add('last-item-y');
        this.div.classList.add(`item-modsize-${this.y % size}-y`);
        this.indeces = [];
        for (let i = 1; i <= Math.pow(size, 2); i++) this.indeces.push(i);
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
listeners();

function makeArray() {
    for (let i = 0; i < Math.pow(size, 2); i++) {
        sudoku[i] = new Array(Math.pow(size, 2));
        for (let j = 0; j < Math.pow(size, 2); j++) {
            sudoku[i][j] = new Cell(j, i);
        }
    }
}

function createDiv(parent) {
    const e = document.createElement('div');
    const p = document.createElement('p');
    e.appendChild(p);
    e.style.width = s - 1 +'px';
    e.style.height = s +'px';
    e.classList.add('item');
    return parent.appendChild(e);
}

function fillSudoku() {
    for (let i = 0; i < sudoku.length; i++) {
        for (let j = 0; j < sudoku[i].length; j++) {
            const e = sudoku[i][j];
            
        }        
    }
}

function listeners() {
    Array.from(document.getElementsByClassName('item')).forEach(e => {
        e.addEventListener('click', event => {
            console.log(e);
        });
    });

    document.getElementsByClassName('toolbarEle')[0].addEventListener('click', event => {
        mode = modes[1];
        console.log('hi');
        
    });

    document.getElementsByClassName('toolbarEle')[1].addEventListener('click', event => {
        mode = modes[2];
    });

    document.getElementsByClassName('toolbarEle')[2].addEventListener('click', event => {
        mode = modes[3];
    });
}