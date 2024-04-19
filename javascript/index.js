
let hamburger = document.querySelector(".hamburger");
let navbarNav = document.querySelector(".navbar-nav");
 


hamburger.addEventListener("click", () => {
   navbarNav.classList.toggle("active");  
   console.log("ok");
});

// About sec
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
function updateElem(elems,tabname) {
  for(elem of elems){
     if(elem.id == tabname ){
        elem.classList.add(`${elem.classList[0]=="tab-links"? "active-link" : "active-tab"}`)
     }else{
        elem.classList.remove(`${elem.classList[0]=="tab-links"? "active-link" : "active-tab"}`)
     }
  }
}
function opentab(tabname) {
   for(elems of [tablinks ,tabcontents]){
      updateElem(elems,tabname)
   }
} 