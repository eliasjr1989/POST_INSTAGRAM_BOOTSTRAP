document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');

    function appearOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.4;

            if (sectionTop < screenPosition) {
                section.classList.add('appear');
            }
        });
    }

    window.addEventListener('scroll', appearOnScroll);
    appearOnScroll(); // Llamarlo una vez para mostrar secciones ya en vista
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});