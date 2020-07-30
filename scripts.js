var media = window.matchMedia("(max-width: 430px)");

function changePage(pageName) {
    var contents = document.getElementsByClassName("content");
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].id === pageName) {
            if (contents[i].classList.contains("hidden")) {
                contents[i].classList.remove("hidden-display");
                setTimeout(function () {
                    contents[i].classList.remove("hidden");
                }, 50);
            }
        } else {
            if (!contents[i].classList.contains("hidden")) {
                contents[i].classList.add("hidden");
                setTimeout(function () {
                    contents[i].classList.add("hidden-display");
                }, 500);
            }
        }
    }

    toggleHamburger();

}

function toggleHamburger(){
    
    if (media.matches) {
        var navbar = document.getElementById("navbar");
        if (navbar.style.height !== "100vh") {
            navbar.style.height = "100vh";
            navbar.style.zIndex = "2";
        } else {
            navbar.style.height = "6vh";
            navbar.style.zIndex = "0";
        }

        var x = document.getElementById("navbar-item-wrapper")
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

}