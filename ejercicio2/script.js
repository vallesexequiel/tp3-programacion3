const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

const filtroInput = document.getElementById("filtro");
const filtrarBtn = document.getElementById("filtrarBtn");
const resultado = document.getElementById("resultado");
const mensajeError = document.getElementById("mensajeError");

filtrarBtn.addEventListener("click", () => {
  const texto = filtroInput.value.trim().toLowerCase();

   // Limpiar resultado anterior
  resultado.innerHTML = "";    
  
  // Limpiar error anterior
  mensajeError.textContent = "";

});