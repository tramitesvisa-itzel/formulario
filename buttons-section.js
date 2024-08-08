
    
   
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






document.querySelectorAll('.btn-siguiente').forEach(button => {
    button.addEventListener('click', function () {
        const nextSectionId = this.getAttribute('data-next');
        document.getElementById(nextSectionId).style.display = 'block';
        this.parentElement.style.display = 'none';
    });
});

document.querySelectorAll('.btn-atras').forEach(button => {
    button.addEventListener('click', function () {
        const prevSectionId = this.getAttribute('data-prev');
        document.getElementById(prevSectionId).style.display = 'block';
        this.parentElement.style.display = 'none';
    });
});





