document.addEventListener('DOMContentLoaded', function () {
    const btnContinuar = document.getElementById('btn-continuar');
    const seleccionTipo = document.getElementById('seleccion-tipo');
    const instrucciones = document.getElementById('instrucciones');
    const tipoSolicitud = document.getElementById('tipo-solicitud');
    const seccionPrimeraVez = document.getElementById('seccion-primera-vez');
    const seccionRenovacion = document.getElementById('seccion-renovacion');
    const dataForm = document.getElementById('dataForm');

    btnContinuar.addEventListener('click', function () {
        instrucciones.style.display = 'none';
        seleccionTipo.style.display = 'block';
    });

    tipoSolicitud.addEventListener('change', function () {
        const selectedValue = tipoSolicitud.value;
        if (selectedValue === 'Renovacion') {
            seccionRenovacion.style.display = 'block';
            seccionPrimeraVez.style.display = 'block';
        } else {
            seccionRenovacion.style.display = 'none';
            seccionPrimeraVez.style.display = 'block';
        }
    });

    dataForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
    });


});









const seccion2 = document.getElementById('seccion2');
const seccion2_2 = document.getElementById('seccion2-2');
const radiosEstadoCivil = document.querySelectorAll('input[name="estado-civil"]');

// Función para mostrar/ocultar secciones
function mostrarSeccion() {
    const estadoCivilSeleccionado = document.querySelector('input[name="estado-civil"]:checked');

    if (estadoCivilSeleccionado && estadoCivilSeleccionado.value === 'casado') {
        seccion2_2.style.display = 'block';
    } else {
        seccion2_2.style.display = 'none';
    }
}

// Añadir el evento de cambio a los botones de radio
radiosEstadoCivil.forEach(radio => {
    radio.addEventListener('change', mostrarSeccion);
});