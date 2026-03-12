// script.js - behaviors for the teaching website

// Wait for the DOM to be available before attaching listeners
window.addEventListener("DOMContentLoaded", function() {
    // smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // automatically update year in footer
    const footerPara = document.querySelector('footer p');
    if (footerPara) {
        const year = new Date().getFullYear();
        footerPara.textContent = `© ${year} Teaching Website`;
    }

    // add a simple search box to filter lessons
    const lessonsSection = document.getElementById('lessons');
    if (lessonsSection) {
        const search = document.createElement('input');
        search.type = 'text';
        search.id = 'lesson-search';
        search.placeholder = 'Search lessons...';
        search.style.display = 'block';
        search.style.marginBottom = '1rem';
        lessonsSection.insertBefore(search, lessonsSection.firstChild);

        search.addEventListener('input', function() {
            const term = this.value.toLowerCase();
            const lessons = lessonsSection.querySelectorAll('.lesson');
            lessons.forEach(l => {
                const text = l.textContent.toLowerCase();
                l.style.display = text.includes(term) ? '' : 'none';
            });
        });
    }
});