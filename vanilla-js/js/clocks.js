const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
//setInterval(호출하려는 함수, 반복할시간)
getClock();
setInterval(getClock, 1000);
