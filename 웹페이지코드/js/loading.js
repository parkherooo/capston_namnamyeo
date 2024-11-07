document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
        document.body.classList.remove('fade');
    }, 1000);
});

const links = document.querySelectorAll('.transition-delay');
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.classList.add('fade');
        setTimeout(() => {
            window.location.href = link.href;
        }, 1000);
    });
});