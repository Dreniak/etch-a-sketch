var container = document.querySelector(".container");
var gridSize = 16;//prompt();

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

var gridBoxes = document.querySelectorAll(".gridBox");
gridBoxes.forEach((box) => {
    box.randomColor = randomColor(box);
    box.opacity = 11;
	box.addEventListener("mouseover", () => {
        if (box.opacity == 0) return;
        box.opacity--;
        box.style.cssText = `${box.randomColor} ${box.opacity/10}`;
	})
});

function randomColor (box) {
    let red = Math.floor(Math.random()*255+1);
    let blue = Math.floor(Math.random()*255+1);
    let green = Math.floor(Math.random()*255+1);
    return box.style.cssText = `background-color: rgba(${red}, ${blue}, ${green},`;
}