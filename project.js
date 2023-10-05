const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset')
const clearBtn = document.querySelector('.clearIt')
const blackBtn = document.querySelector('.black')
const rgbBtn = document.querySelector('.rgb')
const sizeOfGrid = 8;

function  createRgb () {
    const r = Math.floor(Math.random() * 256) 
    const g = Math.floor(Math.random() * 256) 
    const b = Math.floor(Math.random() * 256) 
    return [r, g, b]
}

function createGrid (amtOfGrids) {
    for (let i = 0; i < amtOfGrids; i++) {
        const rows = document.createElement('div')
        rows.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++) {
            const widthAndHeight = 960 / amtOfGrids
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            gridBox.addEventListener('mouseover', () => {
            gridBox.style.backgroundColor = ''
            });

            blackBtn.addEventListener('click', () => {
            gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'black'
            })
            });
            rgbBtn.addEventListener('click', () => {
            const [r, g, b] = createRgb()
            gridBox.addEventListener('mouseenter', () => {
            const bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            gridBox.style.backgroundColor = bgColor
            })    
            })
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


// Function resets grid
function resetGrid () {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    createGrid(sizeOfGrid)
}

clearBtn.addEventListener('click', resetGrid)
