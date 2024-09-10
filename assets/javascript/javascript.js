let icon = document.querySelector("#bar_icon");
let animation =  document.querySelector("header .navAnimation")
icon.addEventListener("click", ()=>{
       animation.classList.toggle("active")
      document.body.classList.toggle("mystyle")
})