var media = window.matchMedia("(max-width: 430px)");

function goHome(){
    document.getElementById("home").style.opacity = "100%";
    document.getElementById("projects").style.opacity = "0%";
    document.getElementById("contact").style.opacity = "0%";

    toggleHamburger();

}

function goProjects(){
    document.getElementById("home").style.opacity = "0%";
    document.getElementById("projects").style.opacity = "100%";
    document.getElementById("contact").style.opacity = "0%";

    toggleHamburger();

}

function goContact(){
    document.getElementById("home").style.opacity = "0%";
    document.getElementById("projects").style.opacity = "0%";
    document.getElementById("contact").style.opacity = "100%";

    toggleHamburger();

}

function toggleHamburger(){
    
    if (media.matches) {
        var navbar = document.getElementById("navbar");
        if (navbar.style.height !== "100vh") {
            navbar.style.height = "100vh";
        } else {
            navbar.style.height = "6vh";
        }

        var x = document.getElementById("navbar-item-wrapper")
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

}