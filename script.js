// 1. Selecciona todos los elementos de la lista dentro de la navegacion
const menuItems = document.querySelectorAll('.menu li');

// 2. Recorremos cada elemento para decirle qué hacer cuando le den clic
menuItems.forEach(item => {
  item.addEventListener('click', function(evento) {
    // (Opcional) Evitamos que el enlace recargue la página si el hreg es "#"
    evento.preventDefault();

    menuItems.forEach(elemento => {
      elemento.classList.remove('active');
    });

    this.classList.add('active');
  });
});



function accionamiento() {
  menuItems
}

