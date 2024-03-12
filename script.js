function copy8831() {
    const copytext = document.querySelector("#copy-text");
    navigator.clipboard.writeText("<a href='https://hansquare.neocities.org'><img src='https://hansquare.neocities.org/media/btn8831.gif'></a>");
    copytext.innerHTML = "copied! ✨";
}
let hasMenuBeenClicked = false
function doAnimation() {
    const menu = document.querySelector(".touch-menu");
    if (hasMenuBeenClicked == false) {
        menu.classList.toggle('hide-menu');
        hasMenuBeenClicked = true;
    }
    menu.classList.toggle('show-menu');
    menu.classList.toggle('hide-menu');
}