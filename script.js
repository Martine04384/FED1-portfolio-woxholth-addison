const toTop = document.getElementById("to-top-button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 2000) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
