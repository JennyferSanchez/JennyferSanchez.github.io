// Obtén todos los elementos de navegación
const navItems = document.querySelectorAll('nav ul li');

// Recorre cada elemento de navegación
navItems.forEach(item => {
    // Verifica si la URL de la página actual coincide con el enlace del elemento de navegación
    if (item.querySelector('a').href === window.location.href) {
        // Agrega una clase CSS para resaltar el elemento activo
        item.classList.add('active');
    }
});


window.onload = function() {
  var listItems = document.querySelectorAll('.list-group-item');

  listItems.forEach(function(listItem) {
    listItem.addEventListener('mouseover', function() {
      var icon = this.querySelector('i');
      icon.classList.add('fa-bounce');
    });

    listItem.addEventListener('mouseout', function() {
      var icon = this.querySelector('i');
      icon.classList.remove('fa-bounce');
    });
  });
};
