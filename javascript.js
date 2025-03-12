// Creates the Grid
let gridSize = 16;
function promptGrid() {
  do {
    gridSize = prompt("Gride Size betwenn 4 and 100 ");
  } while (gridSize < 4 || gridSize > 100);
  return gridSize;
}

let btns = document.querySelectorAll(".btn");

btns.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "rbw":
        createGrid(gridSize);
        hoverRainbow();
        break;
      case "clear":
        createGrid(gridSize);
        hooverEffect(color);
        break;
      case "gridSize":
        promptGrid();
        createGrid(gridSize);
        hooverEffect(color);
        break;
    }
  });
});

let color = "black";
let inpt = document.querySelector(".color");
inpt.addEventListener("input", (e) => {
  let color = e.target.value;
  console.log(color);
  createGrid(gridSize);
  hooverEffect(color);
  return color;
});

function createGrid(num) {
  const container = document.querySelector(".container");
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  container.innerHTML = "";
  for (let x = 0; x < num; x++) {
    let columm = document.createElement("div");
    columm.className = "columm";
    columm.style.width = `${width / num}px`;
    container.appendChild(columm);
    for (let i = 0; i < num; i++) {
      let grid = document.createElement("div");
      grid.className = "grid";
      grid.style.width = `${width / num}px`;
      grid.style.height = `${height / num}px`;
      columm.appendChild(grid);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createGrid(Number(gridSize));
  hooverEffect(color); // Chama a função assim que a página estiver pronta
});

function hooverEffect(colorChoose) {
  const divs = document.querySelectorAll(".grid");

  divs.forEach((dv) => {
    dv.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = `${colorChoose}`;
      console.log(colorChoose); // Muda para preto e fica assim
    });
  });
}

function hoverRainbow() {
  const divs = document.querySelectorAll(".grid");

  divs.forEach((dv) => {
    dv.addEventListener("mouseenter", (e) => {
      let hue = Math.floor(Math.random() * 360); // 0 to 360 degrees for rainbow colors
      e.target.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    });
  });
}
