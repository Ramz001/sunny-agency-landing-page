const threeBars = document.querySelector(".three-bars")
const navLinks = document.querySelector('.nav-links')

threeBars.addEventListener("click", () => {
    if(navLinks.classList.contains("show-links")){
        navLinks.classList.remove("show-links")
    }
    else{
        links.classList.add("show-links")
    }
})
