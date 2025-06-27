import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function BotonesAlternados() {
  const [habilitado, setHabilitado] = useState('izquierdo');
    return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={() => setHabilitado('derecho')}
        disabled={habilitado !== 'izquierdo'}
      >
        Izquierdo
      </button>

    </div>
  );
}