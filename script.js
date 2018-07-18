var container = document.querySelector(".container");
var gridSize = prompt();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

for (x = 0; x < gridSize; x++) { //Creates lines
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
console.log(gridBoxes);
gridBoxes.forEach((box) => {
	box.addEventListener("mouseover", () => {
		box.style.cssText = `background-color: #000;`;
	})
});