function createGrid(size, gridWidth, gridHeight) {
    // todo: consider taking different rows and column sizes
    let grid = [];
    // add size # of divs to grid 
    for(let i = 0; i < size; i++) {
        let gridItem = document.createElement('div');
        gridItem.style.width = `${gridWidth / size}px`;
        gridItem.style.height = `${gridHeight / size}px`;
        gridItem.style.border = "2px solid red";
        grid.push(gridItem); 
    } 

    return grid;
}

const gridContainer = document.querySelector('#grid-container');
const gridSize = 16;
const gridWidth = 320;
const gridHeight = 240;

// add all the divs from grid to gridContainer
createGrid(gridSize, gridWidth, gridHeight).forEach((gridItem) => {
    gridContainer.appendChild(gridItem);
});

// todo: make borders of gridContainer show
// and give it a width and height
gridContainer.style.width = `${gridWidth}px`;
gridContainer.style.height = `${gridHeight}px`;
gridContainer.style.border = "3px solid hsl(0, 100%, 1%)";

// todo: give gridContainer an apprioate sized box that looks nice
// make its borders appear nicely

// todo: turn gridContainer into a css grid
// make it 16 rows and 16 columns with the size being fractional(1fr)

