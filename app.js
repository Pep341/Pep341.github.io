document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.querySelector('.checkbtn');
    const navUL = document.querySelector('ul');

    checkBtn.addEventListener('click', function() {
      navUL.classList.toggle('active');
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const galeria = document.querySelector('.galeria');
    const imagenes = galeria.querySelectorAll('img');
    let index = 0;

    function mostrarSiguienteImagen() {
        imagenes.forEach(img => img.style.display = 'none'); // Oculta todas las imágenes
        imagenes[index].style.display = 'block'; // Muestra la siguiente imagen
        index = (index + 1) % imagenes.length; // Actualiza el índice
        setTimeout(mostrarSiguienteImagen, 5000); // Espera 5 segundos y muestra la siguiente imagen
    }

    mostrarSiguienteImagen(); // Inicia el ciclo de imágenes
});

function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarUbicacion);
    } else {
        document.getElementById("geolocalizacion").innerHTML = "Geolocalización no soportada por tu navegador.";
    }
}

function mostrarUbicacion(posicion) {
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;
    document.getElementById("geolocalizacion").innerHTML = "Latitud: " + latitud + "<br>Longitud: " + longitud;
}