var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight =="0px"){
        MenuItems.style.maxHeight = "200px";
    }
    else{
        MenuItems.style.maxHeight = "0px";
    }
}

// -----

var ProductImg = document.getElementById("product-img");
    var SmallImg = document.querySelectorAll(".small-img-col img");

    SmallImg[0].onclick = function() {
        ProductImg.src = this.src; // Use "this" to refer to the clicked image
    }
    SmallImg[1].onclick = function() {
        ProductImg.src = this.src;
    }
    SmallImg[2].onclick = function() {
        ProductImg.src = this.src;
    }
    SmallImg[3].onclick = function() {
        ProductImg.src = this.src;
    }

    // -----

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var indicator = document.getElementById("indicator");

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}

