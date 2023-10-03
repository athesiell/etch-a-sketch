const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset')
const sizeOfGrid = 4;

function createGrid (amtOfGrids) {
    for (let i = 0; i < amtOfGrids; i++) {
        const rows = document.createElement('div')
        rows.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++) {
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.addEventListener('mouseover', () => {
                gridBox.style.backgroundColor = 'black'
            });
            rows.appendChild(gridBox)
        }
        container.appendChild(rows)
    }
}

resetBtn.addEventListener('click', () => {
    let changeSize = Number(prompt('Type the dimension of the new grid'))
    container.replaceChildren() // Replaces the existing children of a Node with a specified new set of children.
    while (changeSize > 100) {
        changeSize = Number(prompt('Pick a number smaller than 100'))
    }
    createGrid(changeSize)
}); 
    

createGrid(sizeOfGrid)