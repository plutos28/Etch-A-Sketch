let grid = [];
let gridContainer = document.querySelector('#grid-container');

// add 32 divs to grid 
for(let i = 0; i < 32; i++) {
    let gridItem = document.createElement('div');
    grid.push(gridItem); 
}

// add all the divs from grid to gridContainer
// note: might need to sort the array in reverse
// this is because the first items in grid will be the last items in grid-container
grid.forEach((gridItem) => {
    gridContainer.appendChild(gridItem);
});
