import React, { useState } from 'react';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('');

  return(
       <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Calculadora de IMC</h2>

      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <br /><br />

      <button onClick={calcularIMC}>Calcular IMC</button>
      <br /><br />

      {imc && (
        <div style={{ color, fontWeight: 'bold' }}>
          Tu IMC es {imc} - {mensaje}
        </div>
      )}
    </div>


  );

}
