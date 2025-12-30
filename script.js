const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("nav-mobile");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});
