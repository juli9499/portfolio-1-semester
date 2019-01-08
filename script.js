window.addEventListener("load", sidenVises);
let timeOut;


function sidenVises() {
    console.log("siden vises");
    document.querySelector("#logo").classList.add("animation_logo");
    //registerer klik på menu-knap


}



// Når du ruller 20px fra the toppen af dokumentet, vis button
window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    console.log("scroll function");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Når du klikker på button, rul til toppen af siden
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//function addBar {
//    console.log("add bar");
//    if (document.querySelector(".smutvej")==class )
//}
