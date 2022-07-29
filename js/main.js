// var elBtnOpen = document.querySelector(".site-header__menu-btn");
// var elNav = document.querySelector(".sitenav");
// var elList = document.querySelector(".sitenav__list");

// elBtnOpen.addEventListener("click", () => {
//   elNav.classList.toggle("navBlock");
//   elList.classList.toggle("active");
// })

var elHeader = document.querySelector(".site-header")
var elBars = document.querySelector(".site-header__menu-btn")

elBars.addEventListener("click", ()=> {
    elHeader.classList.toggle("site-nav-on")
})