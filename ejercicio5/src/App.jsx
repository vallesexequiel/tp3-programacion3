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

}