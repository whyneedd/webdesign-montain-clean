const humbger = document.querySelector(".humbger");
const menuhumbg = document.querySelector(".menuhumbg");
const navbar = document.querySelector(".navbar");
const navcontent = document.querySelector(".content");

window.addEventListener("load", NavBarLoad);

var navbarl;

function NavBarLoad() {
    navbarl = setTimeout(() => {
        navbar.classList.add("active");
        navcontent.classList.add("active");
    }, 1200);
}

humbger.onclick = function () {
    humbger.classList.toggle("active");
    menuhumbg.classList.toggle("active")

}
