var container = document.querySelector(".etch-a-sketch");
var resetButton = document.querySelector("#reset");

var gridBoxes = "";
var gridLines = "";

var gridSize = 16;

callGrid();

resetButton.addEventListener("click", () => {
    gridSize = prompt("How many lines do you want?");
    if (gridSize <= 0 || gridSize > 64) {
        alert("Please choose a number between 1 and 64!");
        return;
    }
    callGrid();
})

function callGrid () {
    if (gridBoxes) removeGrid();
    createGrid();
    drawBoxes();
}

function createGrid() {
    for (let x = 0; x < gridSize; x++) { //Creates lines
        var gridLine = document.createElement("div");
        gridLine.classList.add("gridLine");
        for (n = 0; n < gridSize; n++) { //Creates cells inside lines
            var gridBox = document.createElement("div");
            gridBox.classList.add("gridBox");
            gridLine.appendChild(gridBox);
        }
        container.appendChild(gridLine);
    }
    gridBoxes = document.querySelectorAll(".gridBox");
    gridLines = document.querySelectorAll(".gridLine");
}

function removeGrid () {
    gridLines.forEach((line) => {
        container.removeChild(line);
    })
}

function drawBoxes() {
    gridBoxes.forEach((box) => {
        box.randomColor = getRandomColor();
        box.opacity = 11;
        box.addEventListener("mouseover", () => {
            if (box.opacity == 0)
                return;
            box.opacity--;
            box.style.cssText = `${box.randomColor} ${box.opacity / 10})`;
        });
    });
}

function getRandomColor () {
    let red = Math.floor(Math.random()*255+1);
    let blue = Math.floor(Math.random()*255+1);
    let green = Math.floor(Math.random()*255+1);
    return `background-color: rgba(${red}, ${blue}, ${green},`;
}