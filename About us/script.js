// Ajouter une interaction JavaScript pour rendre la page plus dynamique

// Change le texte d'accueil au survol de la souris
const headerTitle = document.querySelector('.header h1');
headerTitle.addEventListener('mouseover', () => {
    headerTitle.textContent = 'Découvrez le Virtual Mall!';
});
headerTitle.addEventListener('mouseout', () => {
    headerTitle.textContent = 'Bienvenue au Virtual Mall';
});

// Animation pour afficher les sections progressivement
const aboutSection = document.querySelector('.about-section');
window.addEventListener('scroll', () => {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (sectionPosition < screenPosition) {
        aboutSection.classList.add('visible');
    }
});

// Ajouter un bouton de retour en haut
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆ Retour en Haut';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
