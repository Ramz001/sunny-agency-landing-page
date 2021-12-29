const threeBars = document.querySelector(".three-bars")
const navLinks = document.querySelector('.nav-links')

threeBars.addEventListener("click", () => {
  navLinks.classList.toggle("visible")
})
