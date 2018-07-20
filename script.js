var container = document.querySelector(".etch-a-sketch");
var resetButton = document.querySelector("#reset");
var toggleColor = document.querySelector("#toggle-color");
var toggleGrid = document.querySelector("#toggle-grid");

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
});

toggleColor.addEventListener("click", (e) => {
    var condition1 = "";
    var condition2 = `border: none;`;
    var condition3 = `border-top: none; border-bottom: none; border-image: initial; border-right: 0px none rgb(0, 0, 0); border-left: 1px solid rgb(187, 187, 187);`
    if (e.target.checked) {
        gridBoxes.forEach((box) => {
            condition1 = `border-right: ${box.borderRight}; border-left: ${box.borderLeft};`;
            if (box.style.cssText == condition1 || box.style.cssText == condition2 || box.style.cssText == condition3) {
                box.randomColor = `${getRandomColor()}`;
            }
        });
    } else {
        gridBoxes.forEach((box) => {
            condition1 = `border-right: ${box.borderRight}; border-left: ${box.borderLeft};`;
            if (box.style.cssText == condition1 || box.style.cssText == condition2 || box.style.cssText == condition3) {
                box.randomColor = `background-color: rgba(255, 255, 255,`;
                box.opacity = 10;
            }
        }); 
    }
});

toggleGrid.addEventListener("click", (e) => {
    if (e.target.checked) {
        gridBoxes.forEach((box) => {
            box.style.cssText += `border-right: ${box.borderRight}; border-left: ${box.borderLeft};`;
        });
        gridLines.forEach((line) => {
            line.style.cssText += `border-top: ${line.borderTop}; border-bottom: ${line.borderBottom};`;
        });
    } else {
        gridBoxes.forEach((box) => {
            box.style.cssText += `border: none`;
        });
        gridLines.forEach((line) => {
            line.style.cssText += `border: none`;
        })
    }
});

function getStyles () {
    gridBoxes.forEach((box) => {
        box.borderRight = window.getComputedStyle(box).getPropertyValue("border-right");
        box.borderLeft = window.getComputedStyle(box).getPropertyValue("border-left");
        box.style.cssText += `border-right: ${box.borderRight}; border-left: ${box.borderLeft}`;
    });
    gridLines.forEach((line) => {
        line.borderTop = window.getComputedStyle(line).getPropertyValue("border-top");
        line.borderBottom = window.getComputedStyle(line).getPropertyValue("border-bottom");
        line.style.cssText += `border-top: ${line.borderTop}; border-bottom: ${line.borderBottom}`
    });
}

function callGrid () {
    if (gridBoxes) removeGrid();
    createGrid();
    drawBoxes();
    getStyles();
    toggleColor.checked = true;
    toggleGrid.checked = true;
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
            box.style.cssText += `${box.randomColor} ${box.opacity / 10})`;
        });
    });
}

function getRandomColor () {
    let red = Math.floor(Math.random()*255+1);
    let blue = Math.floor(Math.random()*255+1);
    let green = Math.floor(Math.random()*255+1);
    return `background-color: rgba(${red}, ${blue}, ${green},`;
}