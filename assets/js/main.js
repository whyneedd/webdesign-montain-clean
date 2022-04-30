const humbger = document.querySelector(".humbger");
const menuhumbg = document.querySelector(".menuhumbg");
const navbar = document.querySelector(".navbar");

window.addEventListener("load", NavBarLoad);

var navbarl;

function NavBarLoad() {
    navbarl = setTimeout(() => {
        navbar.classList.add("active")
    }, 1100);
}

humbger.onclick = function () {
    humbger.classList.toggle("active");
    menuhumbg.classList.toggle("active")

}