const humberger = document.querySelector("#humberger");
const navList = document.querySelector(".nav-list");

humberger.addEventListener('click', () => {
    humberger.classList.toggle("humberger-active");
    navList.classList.toggle("hidden");
})