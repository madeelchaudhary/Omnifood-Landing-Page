const navToggler = document.querySelector(".nav-toggler");

function navToggleHandler() {
  document.querySelector(".primary-nav").classList.toggle("nav-show");
  document.body.classList.toggle("overlay-mode");
}
navToggler.addEventListener("click", navToggleHandler);

const navLinks = document.querySelectorAll(".primary-nav a");

function navLinkHandler() {
  const x = window.matchMedia("(max-width: 991px)");
  if (!x.matches) return;
  document.querySelector(".primary-nav").classList.remove("nav-show");
  document.body.classList.remove("overlay-mode");
}
navLinks.forEach((link) => {
  link.addEventListener("click", navLinkHandler);
});
