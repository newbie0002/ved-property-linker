// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Contact Form Submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission
        alert('Thank you for contacting Ved Property Linker! We will get back to you soon.');
        form.reset(); // Reset the form fields
    });
}

// Highlight Active Section in Navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            navbarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});