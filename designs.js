// Select color input
const paint = document.querySelector('#colorPicker');
// Select size input
const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
// Select table & form
const canvas = document.querySelector('#pixelCanvas');
const gridForm = document.querySelector('#sizePicker');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    for (let row = 1; row <= gridHeight; row++) {
        let currentRow = document.createElement('tr');
        canvas.append(currentRow);
        for (let col = 1; col <= gridWidth; col++) {
            let currentCell = document.createElement('td');
            currentRow.append(currentCell);
        };
    };
}

gridForm.addEventListener('submit', makeGrid(), true);


// When table is clicked, change color of cell clicked
canvas.addEventListener('click', function paintCell(event) {
    event.target.style.backgroundColor(paint);
}, true);