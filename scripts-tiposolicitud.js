function mostrarSecciones() {
    var tipoSolicitud = document.getElementById('tipo-solicitud').value;
    if (tipoSolicitud === 'Renovacion') {
        document.getElementById('seccion-renovacion').style.display = 'block';
        document.getElementById('seccion-primera-vez').style.display = 'none';
    } else {
        document.getElementById('seccion-renovacion').style.display = 'none';
        document.getElementById('seccion-primera-vez').style.display = 'block';
    }
}



