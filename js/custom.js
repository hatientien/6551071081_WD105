function toggleContent() {
  var content = document.querySelector(".sec-banner > .container");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
