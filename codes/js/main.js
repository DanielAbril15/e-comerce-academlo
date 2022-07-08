const navBar = document.getElementById("navbar");

document.addEventListener("scroll", () => {
  navBar.classList.toggle("change-navbar", window.scrollY > 0);
});
