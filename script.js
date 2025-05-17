document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.app-nav a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.includes(link.getAttribute('href').split('/').pop())) {
            link.classList.add('active');
        } else if (link.getAttribute('href') === '/dashboard' && (currentPath === '/' || currentPath.endsWith('/dashboard'))) {
            link.classList.add('active');
        } else if (link.getAttribute('href').endsWith('/')) {
            link.classList.remove('active');
        }
        
        if (link.href.includes('mahasiswa') && currentPath.includes('mahasiswa')) {
            if (link.getAttribute('href').includes('mahasiswa')) {
                link.classList.add('active');
            }
        }
    });
    
    if (document.querySelector('.app-nav a.active')) {
        navLinks.forEach(link => {
            const linkPath = link.pathname;
            if (currentPath === linkPath || (linkPath !== '/' && currentPath.startsWith(linkPath))) {
                link.classList.add('active');
            }
        });
    }
});
const footerYearElement = document.querySelector('.app-footer p');
if (footerYearElement) {
    const currentFooterText = footerYearElement.textContent;
    const yearMatch = currentFooterText.match(/\d{4}/);
    
    if (yearMatch) {
        const yearPlaceholder = yearMatch[1];
        const currentYear = new Date().getFullYear();
        
        if (yearPlaceholder.startsWith('{{') && parseInt(yearPlaceholder) !== currentYear) {
            footerYearElement.textContent = `© ${currentYear} My Simple Flask App`;
        }
    } else {
        footerYearElement.textContent = `© ${new Date().getFullYear()} My Simple Flask App`;
    }
}

const formInputs = document.querySelectorAll('form-group input[type="text"], form-group input[type="password"], form-group input[type="email"]');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('is-focused');
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.classList.remove('is-focused');
    });
});