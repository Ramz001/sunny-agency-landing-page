// assigning values
const threeBars = document.querySelector(".three-bars")
const navLinks = document.querySelector('.nav-links')
// adding class to make a navbar visible 
threeBars.addEventListener("click", () => navLinks.classList.toggle("visible"))
