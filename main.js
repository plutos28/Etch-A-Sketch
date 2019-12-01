function createGrid(size) {
    let grid = [];
    for(let i = 0; i < size; i++) {
        grid.push(createGridItem()); 
    } 

    return grid;
}

function createGridItem() {
    const gridItem = document.createElement('div');
    gridItem.style.border = '1px solid hsl(0, 0%, 0%)';

    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = 'hsl(0, 0%, 0%)';
    });

    return gridItem;
}

function drawGrid(gridRows=16, gridColumns=16, gridWidth=740, gridHeight=560) {
    // add the gridItems to the dom through putting them
    // in the gridContainer div and then draw it
    const gridContainer = document.querySelector('#grid-container');
    const gridSize = gridRows * gridColumns; // meaning gridRows by gridColumns box 

    createGrid(gridSize).forEach((gridItem) => {
        gridContainer.appendChild(gridItem);
    });

    gridContainer.style.width = `${gridWidth}px`;
    gridContainer.style.height = `${gridHeight}px`;
    gridContainer.style.border = "3px solid hsl(0, 100%, 1%)";

    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;
}

function clearGrid() {
    const gridContainer = document.querySelector('#grid-container');
    const rows = prompt('Enter The Number of Rows You Want: ');
    const columns = prompt('Enter The Number of Columns You Want: ');

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    drawGrid(rows, columns);
}

function getRandInt(max) {
    return parseInt(Math.random() * max);
}

function getRandHSL() {
    const hue = getRandInt(361);
    const saturation = getRandInt(101);
    const lightness = getRandInt(101);

    return [hue, saturation, lightness];
}

function useRandomColor() {
    const gridContainer = document.querySelector('#grid-container');

    gridContainer.childNodes.forEach((gridItem) => {
        gridItem.addEventListener('mouseenter', () => {
            const color = getRandHSL();
            gridItem.style.backgroundColor = `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;
        });
    });
}

function useBlackColor() {
    const gridContainer = document.querySelector('#grid-container');
    let lightness = 90;

    gridContainer.childNodes.forEach((gridItem) => {
        gridItem.addEventListener('mouseenter', () => {
            // make the lightness value decrease until 0(black) then reset 
            const color = [0, 0, lightness]; 
            lightness -= 10;

            if(lightness <= 0) {
                lightness = 90;
            }

            gridItem.style.backgroundColor = `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;
        });
    });
}

function play() {
    // draw initial grid which is 16x16
    drawGrid();

    // handle all special buttons (clear, blackColor, randomColor)
    // todo: add erase btn
    const clearBtn = document.querySelector('#clear-grid');
    clearBtn.addEventListener('click', clearGrid);

    const randomColorsBtn = document.querySelector('#random-colors');
    randomColorsBtn.addEventListener('click', useRandomColor);

    const tenPercentBlackBtn = document.querySelector('#ten-percent-black');
    tenPercentBlackBtn.addEventListener('click', useBlackColor);
}

play();
