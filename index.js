let menuBtn = document.querySelector(".burger");
let menuOpen = document.querySelector("header nav ul");
let menuClose = document.querySelector(".close-menu-btn button");
let menuItems = document.querySelectorAll("header nav ul li a");

menuBtn.addEventListener("click", () => menuOpen.classList.add("mobileMenu"));
menuClose.addEventListener("click", () =>
  menuOpen.classList.remove("mobileMenu")
);
menuItems.forEach((item) =>
  item.addEventListener("click", () => menuOpen.classList.remove("mobileMenu"))
);
