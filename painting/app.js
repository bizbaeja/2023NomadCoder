const canvas = document.querySelector("canvas");

//constext = 캔버스에 그림을 그릴 떄 사용하 brush
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

context.lineWidth = 2;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
];
function onClick(event) {
  context.beginPath();
  context.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  context.strokeStyle = color;
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
}
addEventListener("mousemove", onClick);
