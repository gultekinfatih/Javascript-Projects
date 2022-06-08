const canvas = document.querySelector("#canvas");
const eraser = document.querySelector(".erase");
const tools = document.querySelector("#colorsAndWith");
const ctx = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const initialBackground = "white";
let drawColor = "black";
let drawWidth = "2";
let is_drawing = false;
let eraseMode = false;

// Change Color
function change_color(element) {
  drawColor = element.style.background;
}

ctx.fillStyle = "white";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

function start(e) {
  is_drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function stop() {
  is_drawing = false;
}

function draw(e) {
  if (is_drawing) {
    ctx.lineTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    ctx.strokeStyle = drawColor;
    ctx.lineWidth = drawWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
}

// Event Listeners
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", stop);
canvas.addEventListener("mouseout", stop);

// Eraser
eraser.addEventListener("click", () => {
  eraseMode = !eraseMode;
  if (eraseMode) {
    tools.style.display = "none";
    eraser.style.border = "1px solid blue";
    eraser.style.background = "aqua";
    drawColor = "white";
    drawWidth = 50;
  } else {
    tools.style.display = "";
    eraser.style.border = "1px solid black";
    eraser.style.background = "antiquewhite";

    drawColor = "black";
    drawWidth = 2;
  }
});

// Clear Canvas
function cleaner() {
  ctx.fillStyle = initialBackground;
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}
