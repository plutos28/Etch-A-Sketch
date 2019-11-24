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

// add all the divs from grid to gridContainer
createGrid(16).forEach((gridItem) => {
    gridContainer.appendChild(gridItem);
});

// todo: give gridContainer an apprioate sized box that looks nice
// make its borders appear nicely

// todo: turn gridContainer into a css grid
// make it 16 rows and 16 columns with the size being fractional(1fr)

