var elModalOpenButton = document.querySelector(".site-header__menu-btn");
var elModal = document.querySelector(".site-header__inner");

elModalOpenButton.addEventListener("click", function(){
  elModal.classList.add("site-header__sitenav");
})


var elModalCloseButton = document.querySelector(".site-header__menu-btn");

elModalCloseButton.addEventListener("click" , function (){
  elModal.classList.remove("site-header__sitenav");
})