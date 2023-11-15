const board = document.querySelector(".board");
const sizeBtns = document.querySelectorAll(".sizes .btn");
const colorPicker = document.querySelector(".color-picker");

function makeCells(numberOfCells) {
  board.innerHTML = ``;
  for (let i = 0; i < numberOfCells ** 2; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.style.width = `${400 / numberOfCells}px`;
    cellDiv.style.height = `${400 / numberOfCells}px`;
    board.appendChild(cellDiv);
  }
}

let cellColor = colorPicker.value;

colorPicker.addEventListener("input", function () {
  cellColor = this.value;
  console.log(cellColor);
});

function makeBoardPaintable() {
  const cells = document.querySelectorAll(".cell");
  console.log(this);
  cells.forEach(function (cell) {
    cell.addEventListener("mouseenter", function () {
      console.log("XD");
      this.style.backgroundColor = cellColor;
      this.style.borderColor = cellColor;
    });
  });
}

sizeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (this.classList.contains("eight")) {
      makeCells(8);
    }
    if (this.classList.contains("sixteen")) {
      makeCells(16);
    }
    if (this.classList.contains("thirtytwo")) {
      makeCells(32);
    }
    makeBoardPaintable();
  });
});
