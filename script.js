function sendMessage(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
}

function subscribe(e) {
  e.preventDefault();
  alert("You have been subscribed!");
}

document.getElementById("menuToggle").onclick = function () {
  document.getElementById("navLinks").classList.toggle("show");
};