let icon = document.querySelector("#bar_icon");
let animation =  document.querySelector("header .navAnimation")
icon.addEventListener("click", ()=>{
       animation.classList.toggle("active")
        document.querySelector("header .body h1").classList.toggle("mystyle")
})