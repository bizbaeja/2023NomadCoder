const longinInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLogiBtnClick(e) {
  e.prevntDefault();
  console.log(e);
}
function handleLinkClick(e) {
  console.log(e);
  alert("clicked!");
}

loginForm.addEventListener("submit", onLogiBtnClick);
link.addEventListener("click", handleLinkClick);
