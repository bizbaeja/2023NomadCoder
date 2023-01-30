const colorOptios = Array.from(document.getElementsByClassName("color-option"));
const canvas = document.querySelector("canvas");
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
//constext = 캔버스에 그림을 그릴 떄 사용하 brush
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
context.lineWidth = lineWidth.value;
let isPainting = false;

function onMove(event) {
  if (isPainting) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    return;
  }
  context.beginPath();
  context.moveTo(event.offsetX, event.offsetY);
}

function onMousedown() {
  isPainting = true;
}

function onMouseup() {
  isPainting = false;
}

function onLineWidthChange(event) {
  console.log(event.target.value);
  context.lineWidth = event.target.value;
}

function onColorChange(event) {
  context.strokeStyle = event.target.value;
  context.fillStyle = event.target.vlaue;
}
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  context.strokeStyle = colorValue;
  context.fillStyle = colorValue;
  color.value = colorValue;
}

console.log(colorOptios);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMousedown);
canvas.addEventListener("mouseup", onMouseup);
canvas.addEventListener("mouseleave", onMouseup);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptios.forEach((color) => color.addEventListener("click"), onColorClick);
