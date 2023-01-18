// <⚠️ DONT DELETE THIS ⚠️>
const title = document.querySelector("div.hello:first-child h1");

// <⚠️ /DONT DELETE THIS ⚠️>
function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerHTML = "The mouse is here!";
}

function handleMouseLeave() {
  title.innerHTML = "The mouse is  gone!";
}
function handleResize() {
  title.innerHTML = "You just resized!";
}
function handleContextMenu() {
  title.innerHTML = "You was a right click!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleResize);
window.addEventListener("contextmenu", handleContextMenu);
