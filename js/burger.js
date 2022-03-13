function toggleClasses() {
    menu.classList.toggle("active");
    burgerBtn.classList.toggle("active");
    body.classList.toggle("lock");
}

let burgerBtn = document.getElementById("burgerBtn");
let menu = document.getElementById("menu");
let body = document.getElementById("body");

burgerBtn.addEventListener("click", toggleClasses);