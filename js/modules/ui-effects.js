/**
 * UI effects and animations
 */

(function() {
    // Efeito de aparecer elementos quando scrollando
    function initFadeInElements() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    // Inicializa os efeitos quando o DOM estiver pronto
    document.addEventListener('DOMContentLoaded', function() {
        initFadeInElements();
    });
    
    // Re-aplica efeitos após mudanças de conteúdo
    document.addEventListener('contentUpdated', function() {
        initFadeInElements();
    });
})();