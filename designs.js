// Select color input
const paint = document.querySelector('#colorPicker');
// Select size input
const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
// Select table
const canvas = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
function makeGrid(gridHeight, gridWidth) {
    for (var row = 1; row <= gridHeight; row++) {
        let currentRow = document.createElement('tr');
        canvas.append(currentRow);
        for (var col = 1; col <= gridWidth; col++) {
            let currentCell = document.createElement('td');
            currentRow.append(currentCell);
        }
    }
}

document.querySelector('#sizePicker').addEventListener('submit', makeGrid(gridHeight, gridWidth));



document.querySelector('#pixelCanvas').addEventListener('click', function(Event) {
    Event.target.style.backgroundColor(paint);
});