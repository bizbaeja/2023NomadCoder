const canvas = document.querySelector("canvas");
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

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMousedown);
canvas.addEventListener("mouseup", onMouseup);
canvas.addEventListener("mouseleave", onMouseup);
lineWidth.addEventListener("change", onLineWidthChange);
