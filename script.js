const board = document.querySelector(".board");

function makeCells(numberOfCells) {
  for (let i = 0; i < numberOfCells ** 2; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.style.width = `${400 / numberOfCells}px`;
    cellDiv.style.height = `${400 / numberOfCells}px`;
    board.appendChild(cellDiv);
  }
}

makeCells(16);
