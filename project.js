const container = document.querySelector('.container');
const sizeOfGrid = 16;

function createGrid (amtOfGrids) {
    for (let i = 0; i < amtOfGrids; i++) {
        const rows = document.createElement('div')
        rows.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++) {
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            });
            rows.appendChild(gridBox)
        }
        container.appendChild(rows)
    }
}

createGrid(sizeOfGrid)