const threeBars = document.querySelector(".three-bars")
const navLinks = document.querySelector('.nav-links')

console.log('fuck you')
threeBars.addEventListener("click", () => {
    navLinks.classList.toggle("show-links")
    console.log("it works")
})
