document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const services = document.querySelectorAll('.service-item');
    const about = document.querySelector('.about');

    // Hero text animation
    hero.style.opacity = '0';
    setTimeout(() => {
        hero.style.transition = 'opacity 2s';
        hero.style.opacity = '1';
    }, 500);

    // Service item hover effect
    services.forEach(service => {
        service.addEventListener('mouseenter', () => {
            service.style.transform = 'scale(1.1)';
            service.style.transition = 'transform 0.3s';
        });

        service.addEventListener('mouseleave', () => {
            service.style.transform = 'scale(1)';
        });
    });

    // About section animation
    about.style.opacity = '0';
    about.style.transform = 'translateY(50px)';
    setTimeout(() => {
        about.style.transition = 'opacity 2s, transform 2s';
        about.style.opacity = '1';
        about.style.transform = 'translateY(0)';
    }, 1000);

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
});
