
let hamburger = document.querySelector(".hamburger");
let navbarNav = document.querySelector(".navbar-nav");
 


hamburger.addEventListener("click", () => {
   navbarNav.classList.toggle("active");  
   console.log("ok");
});
