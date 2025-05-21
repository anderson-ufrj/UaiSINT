/**
 * Navigation and UI interaction functionality
 */

(function() {
        // Garantir que as traduções são inicializadas corretamente
        window.addEventListener('load', function() {
            // Verificar se o arquivo externo foi carregado
            if (typeof window.translations === 'undefined') {
                console.warn("External translations not loaded, using fallback");
                window.translations = translationsFallback;
            }
            
            // Inicializar com idioma salvo
            const savedLang = localStorage.getItem('selectedLanguage') || 'pt';
            if (typeof window.setLanguage === 'function') {
                window.setLanguage(savedLang);
            } else {
                console.error("setLanguage function not available");
            }
            
            console.log("Website initialized with language: " + savedLang);
        });
        
        // Toggle Info Panel
        function toggleInfo() {
            const infoContent = document.getElementById('infoContent');
            
            // Atualizar traduções do painel de informações quando aberto
            if (!infoContent.classList.contains('show')) {
                updateInfoTranslations();
            }
            
            infoContent.classList.toggle('show');
        }
        
        // Função para atualizar traduções do painel de informações
        function updateInfoTranslations() {
            const infoElements = document.querySelectorAll('#infoContent [data-i18n]');
            const currentLang = localStorage.getItem('selectedLanguage') || 'pt';
            
            infoElements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (!key) return;
                
                const keys = key.split('.');
                let translation = translations[currentLang];
                
                for (const k of keys) {
                    if (translation && k in translation) {
                        translation = translation[k];
                    } else {
                        translation = null;
                        break;
                    }
                }
                
                if (translation) {
                    element.textContent = translation;
                }
            });
        }

        // Close info panel when clicking outside
        document.addEventListener('click', (e) => {
            const floatingInfo = document.querySelector('.floating-info');
            const infoContent = document.getElementById('infoContent');
            
            if (!floatingInfo.contains(e.target) && infoContent.classList.contains('show')) {
                infoContent.classList.remove('show');
            }
        });

        // Modal removido
        
        // Timeline navigation e highlight
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        
        // Adiciona rolagem suave para as âncoras
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                // Rolagem suave para a seção
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
                
                // Atualiza a classe ativa
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // Highlight do menu ao rolar a página
        function highlightMenuOnScroll() {
            let scrollPosition = window.scrollY;
            
            // Destaca o item do menu correspondente à seção visível
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100; // Ajuste para considerar o header
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
        
        // Adiciona o evento de scroll
        window.addEventListener('scroll', highlightMenuOnScroll);
        
        // Inicializa o highlight para a posição atual
        highlightMenuOnScroll();
})();
