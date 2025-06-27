import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operacion, setOperacion] = useState("suma");
  const [resultado, setResultado] = useState(null);

const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res = "";

    if (operacion === "suma") {
      res = a + b;
    } else if (operacion === "resta") {
      res = a - b;
    } else if (operacion === "multiplicacion") {
      res = a * b;
    } else {
      res = "Operación inválida";
    }

    setResultado(res);
  };
  const esDivision = operacion === "division"

    return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Calculadora React</h2>

      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <div style={{ marginTop: "10px" }}>
        <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicacion">Multiplicación</option>
          <option value="division">División</option>
        </select>
      </div>

      <button
        onClick={calcular}
        disabled={esDivision}
        style={{ marginTop: "10px" }}
      >
        Calcular
      </button>

      {esDivision && (
        <p style={{ color: "red" }}>
          ⚠️ La operación de división está deshabilitada.
        </p>
      )}

      {resultado !== null && (
        <p style={{ marginTop: "15px" }}>
          Resultado: <strong>{resultado}</strong>
        </p>
      )}
    </div>
  );

}