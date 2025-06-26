const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const calcularBtn = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

operacion.addEventListener("change", () => {
    if (operacion.value === "division") {
        calcularBtn.disabled = true;
    } else {
        calcularBtn.disabled = false;
    }
});

calcularBtn.addEventListener("click", () => {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);
    let res = 0;

 if (operacion.value === "suma") {
  res = n1 + n2;
} else if (operacion.value === "resta") {
  res = n1 - n2;
} else if (operacion.value === "multiplicacion") {
  res = n1 * n2;
}

    resultado.textContent = "Resultado: " + res;
});
