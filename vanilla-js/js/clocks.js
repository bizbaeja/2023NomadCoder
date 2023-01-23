const clock = document.querySelector("clock");

function sayHello() {
  console.log("hello");
}
//setInterval(호출하려는 함수, 반복할시간)
setInterval(sayHello, 5000);
