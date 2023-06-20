const loader = document.querySelector(".loader-PC");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add(".fadeOut");
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 3000);
});
