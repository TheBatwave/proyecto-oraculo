// Seleccionamos el contenedor principal donde inyectaremos el html
const mainContest = document.querySelector('.main-content');
const menuItems = document.querySelectorAll('.item-menu');

menuItems.forEach(item => {
  item.addEventListener('click', async function(evento) {
    evento.preventDefault(); 

    // 1. Resaltar la pestaña activa
    menuItems.forEach(elemento => elemento.classList.remove('active'));
    this.classList.add('active');

    // 2. Leer la ruta del archivo que queremos traer
    const rutaArchivo = this.getAttribute('data-url');

    try {
      // 3. Ejecutamos Fetch: "Ve a buscar ese archivo"
      // 'await' le dice a JS que espere hasta que el archivo llegue antes de seguir
      const respuesta = await fetch(rutaArchivo);

      // Verificamos que el archivo exista (que no sea un error 404)
      if(!respuesta.ok) {
        throw new Error('No se pudo encontrar el archivo');
      }
      
      // 4. Converimos la respuesta en el texto plano (HTML)
      const html = await respuesta.text();

      // 5. Inyectamos ese nuevo HTML dentro de nuestro <main>
      mainContest.innerHTML = html;

    } catch (error) {
      // si algo falla (ej. se cae la red o no existe el archivo), mostramos un error elegante jsjsjs
      console.error("Error en la carga:", error);
      mainContest.innerHTML = `
          <div style="color: red; padding: 20px;">
          <h2>Error de conexión</h2>
          <p>No se pudo cargar la sección solicitada</p>
        </div>
      `;
    }
  });
});



const botonPrueba = document.getElementById('btn-prueba');

// elemento.addEventListener('elEvento', la accion);
botonPrueba.addEventListener('click', 
  function() {
    menuItems.forEach(item => {
      item.style.backgroundColor = 'red';
    });
  }
);




