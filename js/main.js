let options = document.getElementById("options");
let showOptions = document.getElementById("listOptions");



//Función para hacer aparecer las opciones en modo md
options.addEventListener("click", ()=>{
   showOptions.classList.toggle("d-none");
    showOptions.classList.add("d-block");
})