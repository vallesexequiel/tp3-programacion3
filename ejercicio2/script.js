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

    if (texto === "") {
    mensajeError.textContent = "Por favor, ingrese texto para filtrar.";
    return;
  }
    const coincidencias = palabras.filter(p => p.toLowerCase().includes(texto));

  if (coincidencias.length === 0) {
    resultado.innerHTML = "<p>No se encontraron coincidencias.</p>";
  } else {
    const ul = document.createElement("ul");
    coincidencias.forEach(palabra => {
      const li = document.createElement("li");
      li.textContent = palabra;
      ul.appendChild(li);
    });
    resultado.appendChild(ul);
  }

});