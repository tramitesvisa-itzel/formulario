document.getElementById('btn-continuar').addEventListener('click', function () {
    document.getElementById('instrucciones').style.display = 'none';
    document.getElementById('seleccion-tipo').style.display = 'block';
});

document.getElementById('btn-seleccion').addEventListener('click', function () {
    const tipoSolicitud = document.getElementById('tipo-solicitud').value;
    if (tipoSolicitud === 'primera_vez') {
        document.getElementById('seleccion-tipo').style.display = 'none';
        document.getElementById('formulario-primera-vez').style.display = 'block';
    } else {
        alert('Formulario para Renovación aún no implementado.');
    }
});
document.getElementById('btn-seleccion').addEventListener('click', function () {
    const tipoSolicitud = document.getElementById('tipo-solicitud').value;
    if (tipoSolicitud === 'primera_vez') {
        document.getElementById('seleccion-tipo').style.display = 'none';
        document.getElementById('formulario-primera-vez').style.display = 'block';
    } else {
        alert('Formulario para Renovación aún no implementado.');
    }
});

document.querySelectorAll('.btn-siguiente').forEach(button => {
    button.addEventListener('click', function () {
        const nextSection = this.getAttribute('data-next');
        this.parentElement.style.display = 'none';
        document.getElementById(nextSection).style.display = 'block';
    });
});



document.querySelectorAll('.btn-atras').forEach(button => {
    button.addEventListener('click', function() {
        const previousSection = this.getAttribute('data-previous');
        this.parentElement.style.display = 'none';
        document.getElementById(previousSection).style.display = 'block';
    });
});


document.getElementById('btn-mostrar-formulario').addEventListener('click', function () {
    document.getElementById('formulario-primera-vez').style.display = 'none';
    document.getElementById('vista-previa').style.display = 'block';
    // Aquí puedes agregar código para generar la vista previa del formulario en formato PDF
});

document.getElementById('form-primera-vez').addEventListener('submit', function (event) {
    event.preventDefault();
    // Aquí puedes agregar código para validar y enviar el formulario
    alert('Formulario enviado con éxito.');
    window.location.href = '/';
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

// Inicializar la vista correcta al cargar la página
mostrarSeccion();


document.getElementById('btn-seleccion').addEventListener('click', function() {
    const tipoSolicitud = document.getElementById('tipo-solicitud').value;
    const seccionRenovacion = document.getElementById('seccion-renovacion')
    if (tipoSolicitud === 'renovacion') {
        seccionRenovacion.style.display = 'block';
    } else {
        seccionRenovacion.style.display = 'none';
    }
});
 
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

<script>
        document.getElementById('btn-seleccion').addEventListener('click', function () {
            var tipoSolicitud = document.getElementById('tipo-solicitud').value;
            if (tipoSolicitud === 'primera_vez') {
                document.getElementById('formulario-primera-vez').style.display = 'block';
                document.getElementById('formulario-renovacion').style.display = 'none';
            } else if (tipoSolicitud === 'renovacion') {
                document.getElementById('formulario-primera-vez').style.display = 'none';
                document.getElementById('formulario-renovacion').style.display = 'block';
            }
        });
    </script>

document.getElementById('btn-seleccion').addEventListener('click', function () {
    var tipoSolicitud = document.getElementById('tipo-solicitud').value;
    
    if (tipoSolicitud === 'primera_vez') {
        document.getElementById('formulario-primera-vez').style.display = 'block';
        document.getElementById('formulario-renovacion').style.display = 'none';
    } else if (tipoSolicitud === 'renovacion') {
        document.getElementById('formulario-primera-vez').style.display = 'none';
        document.getElementById('formulario-renovacion').style.display = 'block';
    }
});








// Manejo de navegación entre secciones del formulario
document.querySelectorAll('.btn-siguiente').forEach(function (button) {
    button.addEventListener('click', function () {
        var currentSection = button.parentElement;
        var nextSectionId = button.getAttribute('data-next');
        var nextSection = document.getElementById(nextSectionId);
        
        if (currentSection) currentSection.style.display = 'none';
        if (nextSection) nextSection.style.display = 'block';
    });
});

document.querySelectorAll('.btn-atras').forEach(function (button) {
    button.addEventListener('click', function () {
        var currentSection = button.parentElement;
        var previousSectionId = button.getAttribute('data-previous');
        var previousSection = document.getElementById(previousSectionId);
        
        if (currentSection) currentSection.style.display = 'none';
        if (previousSection) previousSection.style.display = 'block';
    });
});


