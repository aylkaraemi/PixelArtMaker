const canvas = document.querySelector('#pixelCanvas');
const gridForm = document.querySelector('#sizePicker');


gridForm.addEventListener('submit', function makeGrid(event) {
    event.preventDefault();
    const gridHeight = document.querySelector('#inputHeight').value;
    const gridWidth = document.querySelector('#inputWidth').value;
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
    }
    canvas.style.backgroundColor = 'black';
    for (let row = 1; row <= gridHeight; row++) {
        let currentRow = document.createElement('tr');
        canvas.append(currentRow);
        for (let col = 1; col <= gridWidth; col++) {
            let currentCell = document.createElement('td');
            currentRow.append(currentCell);
        };
    };
});


canvas.addEventListener('click', function paintCell(event) {
    const paint = document.querySelector('#colorPicker').value;
    event.target.style.backgroundColor = paint;
});