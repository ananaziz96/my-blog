function clickLike() {
  var likeButton = document.getElementById("likeButton");
  likeButton.classList.remove("black");
  likeButton.classList.add("pink");
}

function bookmarkAlert() {
  alert("Press Ctrl + D to bookmark this page");
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
