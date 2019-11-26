function createGrid(size) {
    // todo: consider taking different rows and column sizes
    let grid = [];
    // add size # of divs(gridItems) to grid 
    for(let i = 0; i < size; i++) {
        // todo: move gridItem creation onto own function
        let gridItem = document.createElement('div');
        gridItem.style.border = "2px solid red";
        grid.push(gridItem); 
    } 

    return grid;
}

function drawGrid(gridRows, gridColumns, gridWidth, gridHeight) {
    const gridContainer = document.querySelector('#grid-container');
    const gridSize = gridRows * gridColumns; // meaning gridRows by gridColumns box 

    // add all the divs from grid to gridContainer
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

drawGrid(25, 25, 400, 400);