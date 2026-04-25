// Mensaje de bienvenida 
window.onload = function() {
    alert("Welcome to my portfolio!");
};
// Cambiar texto de la seccion home
const changeBtn = document.getElementById("changeTextBtn");
const textHome = document.getElementById("text_home");

changeBtn.addEventListener("click", function() {
    textHome.textContent = "Thanks for visiting my portfolio. Explore my projects and contact me!";
});


