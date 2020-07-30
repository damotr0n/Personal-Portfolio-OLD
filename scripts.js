var media = window.matchMedia("(max-width: 430px)");

function changePage(pageName) {
    var contents = document.getElementsByClassName("content");
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].id === pageName) {
            if (contents[i].classList.contains("hidden")) {
                contents[i].classList.remove("hidden");
            }
        } else {
            if (!contents[i].classList.contains("hidden")) {
                contents[i].classList.add("hidden");
            }
        }
    }
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