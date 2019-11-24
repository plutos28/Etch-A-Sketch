function createGrid(size) {
    // todo: consider taking different rows and column sizes
    let grid = [];
    // add size divs to grid 
    for(let i = 0; i < size; i++) {
        let gridItem = document.createElement('div');
        grid.push(gridItem); 
    } 

    return grid;
}

const gridContainer = document.querySelector('#grid-container');
const gridSize = 16;

// add all the divs from grid to gridContainer
createGrid(gridSize).forEach((gridItem) => {
    gridContainer.appendChild(gridItem);
});

// todo: make borders of gridContainer show
// and give it a width and height
gridContainer.style.width = "640px";
gridContainer.style.height = "640px";
gridContainer.style.border = "3px solid hsl(0, 100%, 1%)";

// todo: give gridContainer an apprioate sized box that looks nice
// make its borders appear nicely

// todo: turn gridContainer into a css grid
// make it 16 rows and 16 columns with the size being fractional(1fr)

