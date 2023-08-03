//burger menu functionality
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

document.querySelector('.js-linkIn-button').addEventListener('click',() =>{
location.href="https://www.linkedin.com/in/joshua-bajar-b99ba3285/"
});

document.querySelector('.js-github-button').addEventListener('click',()=>{
  location.href="https://github.com/Bajar0880"
});
