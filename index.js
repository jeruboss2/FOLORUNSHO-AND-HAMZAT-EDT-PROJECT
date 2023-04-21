// //    // show menu on click
// const navBtn = document.querySelector(".nav__menu");
// const dropDown = document.querySelector(".nav__item");


// navBtn.addEventListener("click", () => {
//     dropDown.classList.toggle("show-dropdown");
// });
    


const navBtn = document.querySelector(".nav__item")
const menuBtn = document.querySelector(".menu__btn");
const closeBtn = document.querySelector(".close__btn");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navBtn.classList.add("show__nav");
    closeBtn.classList.add("show-Btn");
    menuBtn.classList.add("show-menuBtn");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navBtn.classList.remove("show__nav");
    closeBtn.classList.remove("show-Btn");
    menuBtn.classList.remove("show-menuBtn");
  });
}
