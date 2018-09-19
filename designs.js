// Select table & form
const canvas = document.querySelector('#pixelCanvas');
const gridForm = document.querySelector('#sizePicker');

// Select color input
const paint = document.querySelector('#colorPicker').value;


// When size is submitted by the user, call makeGrid()
gridForm.addEventListener('submit', function makeGrid(event) {
    event.preventDefault();
    // Select size input
    const gridHeight = document.querySelector('#inputHeight').value;
    const gridWidth = document.querySelector('#inputWidth').value;
    for (let row = 1; row <= gridHeight; row++) {
        let currentRow = document.createElement('tr');
        canvas.append(currentRow);
        for (let col = 1; col <= gridWidth; col++) {
            let currentCell = document.createElement('td');
            currentRow.append(currentCell);
        };
    };
});



// When table is clicked, change color of cell clicked
canvas.addEventListener('click', function paintCell(event) {
    event.target.style.backgroundColor(paint);
});