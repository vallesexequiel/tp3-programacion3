
window.addEventListener('DOMContentLoaded', () => {

     
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {

      const completadas = data.filter(tarea => tarea.completed === true);

      const lista = document.getElementById('lista');

        completadas.forEach(tarea => {
            const li = document.createElement('li');
            li.textContent = `✅ Tarea completada #${tarea.id} del usuario ${tarea.userId}`;
            lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al obtener las tareas:', error);
    });

});