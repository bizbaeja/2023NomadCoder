const clock = document.querySelector("h2#clock");

function getClock() {
  let date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

clock.style.cssText = "color:whitesmoke; font-size:50px; ";
//setInterval(호출하려는 함수, 반복할시간)
getClock();
setInterval(getClock, 1000);
