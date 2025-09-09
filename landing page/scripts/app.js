let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header__icon")
let menuBtnIcon = document.querySelector(".header__icon i")

menuBtn.addEventListener("click", function(){
    if(menuBtnIcon.classList.contains("fa-bars")){
        menu.style.right = "0"
        menuBtnIcon.classList = "fa fa-times"
    }else {
        menu.style.right = "-256px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})