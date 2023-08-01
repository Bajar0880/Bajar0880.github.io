function closeMenu() {
  const backDrop = document.getElementsByClassName("backdrop")[0];
  const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
  backDrop.style.display = "none";
  mobileMenu.style.display = "none";
}
function showMenu() {
  const backDrop = document.getElementsByClassName("backdrop")[0];
  const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
  backDrop.style.display = "flex";
  mobileMenu.style.display = "flex";
}
