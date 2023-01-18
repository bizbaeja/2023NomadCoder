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
  document.body.style.backgroundColor = "tomato";
}
function handleContextMenu() {
  title.innerHTML = "You was a right click!";
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("All GOOD");
}
function handleWindowCopy() {
  alert("copier!");
}
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;
window.onresize = handleResize;
window.oncontextmenu = handleContextMenu;
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
window.addEventListener("copy", handleWindowCopy);
