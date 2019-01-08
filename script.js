window.addEventListener("load", myFunction);


var myVar;

function myFunction() {
    myVar = setTimeout(sidenVises, 4000);
     document.querySelector("#loading").classList.add("animation_logo2");
    document.querySelector("#loading_screen").classList.add("fade_out");

}



function sidenVises() {
    console.log("siden vises");


    document.getElementById("loading").style.display = "none";
    document.getElementById("loading_screen").style.display = "none"; document.querySelector("#logo").classList.add("animation_logo");


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
