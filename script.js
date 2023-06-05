
var typing = new Typed(".text1", {
    strings: ["", "DESIGNER", " DEVELOPER"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("scrolled");
    } else {
        document.getElementById("header").classList.remove("scrolled");
    }
}



function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
