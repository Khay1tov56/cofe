
var elHeader = document.querySelector(".site-header")
var elBars = document.querySelector(".site-header__menu-btn")

elBars.addEventListener("click", ()=> {
    elHeader.classList.toggle("site-nav-on")
})

var elModal = document.querySelector(".modal");
var elOpenBtn = document.querySelector(".bean__btn")
var elCloseBtn = document.querySelector(".modal__btn")
var elModals = document.querySelector(".modal__btns")

elOpenBtn.addEventListener("click", ()=> {
    elModal.classList.add("modal__list")
});

elCloseBtn.addEventListener("click", ()=> {
    elModal.classList.remove("modal__list")
});

elModals.addEventListener("click", ()=> {
    elModal.classList.remove("modal__list")
})