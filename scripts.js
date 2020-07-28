function goHome(){
    document.getElementById("home").style.opacity = "100%";
    document.getElementById("projects").style.opacity = "0%";
    document.getElementById("contact").style.opacity = "0%";
}

function goProjects(){
    document.getElementById("home").style.opacity = "0%";
    document.getElementById("projects").style.opacity = "100%";
    document.getElementById("contact").style.opacity = "0%";
}

function goContact(){
    document.getElementById("home").style.opacity = "0%";
    document.getElementById("projects").style.opacity = "0%";
    document.getElementById("contact").style.opacity = "100%";
}

function toggleHamburger(){
     
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("navbar-active");

    var navbarItems = document.querySelectorAll(".navbar-item");
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].classList.toggle("navbar-item-visible")
    }

}