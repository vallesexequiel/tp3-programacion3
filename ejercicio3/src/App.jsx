import { useEffect, useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        const tareasCompletadas = data
          .filter(tarea => tarea.completed)
          .map(tarea => ({
            ...tarea,
            title: `✅ Tarea completada #${tarea.id} del usuario ${tarea.userId}`
          }));
        setTareas(tareasCompletadas);
      })
      .catch(error => console.error('Error al obtener tareas:', error));
  }, []);
}
