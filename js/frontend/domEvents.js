function domEvents(e) {
    console.log(e);
    alert("You pulled the wrong lever kronk!!!");

}
function launchGuy() {
    const guy = document.getElementById("guy");
    const poof = document.getElementById("poof");
    guy.style.animation = "none";
    void guy.offsetWidth; // restart animation trick
    guy.style.opacity = "1";
    guy.style.animation = "launchUp 1.1s cubic-bezier(.3,.9,.4,1) forwards";
    poof.style.opacity = "1";
    poof.style.animation = "poofFade 0.6s ease-out forwards";
}

function mouseOverAlert(cats){
    console.log(cats);
    console.log("Mouse over event triggered, new date(): " + new Date());
}

document.getElementById("btn1").addEventListener("click", domEvents);
document.getElementById("btn1").addEventListener("mouseover", mouseOverAlert);

/*window.addEventListener("mouseover", (e) => {
    console.log("x direction", e.clientx);
    console.log("y direction", e.clienty);

});*/
