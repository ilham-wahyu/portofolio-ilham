var nav = document.querySelector("nav");
window,addEventListener("scroll", function () {
    if (window.pageYOffset > 90) {
      nav.classList.add("navigasi-scroll");
    } else {
      nav.classList.remove("navigasi-scroll");
    }
});
