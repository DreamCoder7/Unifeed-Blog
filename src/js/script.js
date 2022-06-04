const mobileNavEl = document.querySelector(".nav__list");
const btnOpenEl = document.querySelector("#btn__open");
const btnCloseEl = document.querySelector("#btn__close");
const mobileBtns = document.querySelectorAll(".nav__mobile--btn");

const toggleNav = () => {
  mobileNavEl.classList.toggle("hidden");
  mobileBtns.forEach((btn) => {
    btn.classList.toggle("btnHidden");
  });
};

btnOpenEl.addEventListener("click", toggleNav);
btnCloseEl.addEventListener("click", toggleNav);
