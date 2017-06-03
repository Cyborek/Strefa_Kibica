var mainModul = (function(){
    var menuButton = document.querySelector("#menuButton"),
        hamburger = document.querySelector("#hamburger"),
        cross = document.querySelector("#cross"),
        nav = document.querySelector("#navMenu"),
        main = document.querySelector("#main"),
        anchor = document.querySelectorAll(".anchor"),
        _showAndCloseMenu = function(){
            nav.classList.toggle("flex");
            nav.classList.toggle("close");
            main.classList.toggle("close");
            hamburger.classList.toggle("close");
            cross.classList.toggle("close");
        };
    
    return{
        menuButton: menuButton,
        showAndCloseMenu: _showAndCloseMenu,
        anchor: anchor,
    }
}());

document.addEventListener("DOMContentLoaded", function(){
    mainModul.menuButton.addEventListener("click", mainModul.showAndCloseMenu, false);
    
    for(var i=0; i<mainModul.anchor.length; i++){
        mainModul.anchor[i].addEventListener("click", mainModul.showAndCloseMenu, false);
    }
});