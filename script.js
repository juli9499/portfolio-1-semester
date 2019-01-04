window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("siden vises");
    //registerer klik på menu-knap

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector(".undermenu").classList.toggle("hidden");

    let erSkjult = document.querySelector(".undermenu").classList.contains("hidden");

    if (erSkjult == true) {
        //menuen er nu skjult - ændre menuknap til lll
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        //menuen er nu vist - ændre menuknap til X
        document.querySelector("#menuknap").textContent = "✕";
    }

}
