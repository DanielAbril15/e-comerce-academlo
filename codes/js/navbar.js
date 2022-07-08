const navBar = document.getElementById("navbar");

export function nav() {
  document.addEventListener("scroll", () => {
    navBar.classList.toggle("change-navbar", window.scrollY > 0);
  });
}
