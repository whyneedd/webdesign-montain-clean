

window.addEventListener("load", ShowLoader);

var loader;

function ShowLoader() {
    loader = setTimeout(ShowPages, 120);

}

function ShowPages() {
    document.querySelector(".loading1").style.display="none";
    document.querySelector(".pages").style.display="block";

}