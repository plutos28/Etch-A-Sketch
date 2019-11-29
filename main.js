function createGrid(size, gridItemColors) {
    let grid = [];
    for(let i = 0; i < size; i++) {
        grid.push(createGridItem(gridItemColors)); 
    } 

    return grid;
}

function createGridItem(color=[0, 0, 0]) {
    const gridItem = document.createElement('div');
    gridItem.style.border = `1px solid hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;

    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;
    });

    return gridItem;
}

function drawGrid(gridRows=16, gridColumns=16, gridWidth=35, gridHeight=35) {
    // add the gridItems to the dom through putting them
    // in the gridContainer div and then draw it
    const gridContainer = document.querySelector('#grid-container');
    const gridSize = gridRows * gridColumns; // meaning gridRows by gridColumns box 

    createGrid(gridSize).forEach((gridItem) => {
        gridContainer.appendChild(gridItem);
    });

    gridContainer.style.width = `${gridWidth}em`;
    gridContainer.style.height = `${gridHeight}em`;
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

function play() {
    // draw initial grid which is 16x16
    drawGrid();

    // handle all special buttons (clear, blackColor, randomColor)
    const clearBtn = document.querySelector('#clear-grid');
    clearBtn.addEventListener('click', clearGrid);
}

play();
