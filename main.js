
const menuOpenButton = document.querySelector(".Menu-Open");
const MenuCloseButton = document.querySelector(".close-Menu");
const navbar = document.querySelector(".navbar");
const overflow = document.querySelector(".overflow");
const featuresButton = document.querySelector(".features img")
const companyButton = document.querySelector(".company img")

menuOpenButton.addEventListener('click', e => {
  const icon = document.querySelector(".Menu-Open img");
  menuOpenButton.classList.toggle("active-btn");
  navbar.classList.toggle("open");
  navbar.classList.toggle("active-menu");
  overflow.classList.toggle("active-menu");
  featuresButton.classList.toggle("arrow")
  companyButton.classList.toggle("arrow")

  if (menuOpenButton.classList.contains("active-btn")) {
    icon.src = "./images/icon-close-menu.svg";
  } else {
    icon.src = "./images/icon-menu.svg";
  }

  });

 
document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

  let currentDropdown 
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})
