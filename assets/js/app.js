document.querySelector("#menu").addEventListener('click',(e) => {
    let nav = document.querySelector(".nav .nav-items");
    nav.classList.toggle("submenu-show");
});