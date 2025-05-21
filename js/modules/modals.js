/**
 * Modal and popup functionality
 */

(function() {
    // Initialize modal functionality
    function initializeModals() {
        const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
        const modalClosers = document.querySelectorAll('[data-modal-close]');
        
        // Open modal when trigger is clicked
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const modalId = trigger.getAttribute('data-modal-trigger');
                const modal = document.getElementById(modalId);
                
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                }
            });
        });
        
        // Close modal when close button is clicked
        modalClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                const modal = closer.closest('.modal');
                if (modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = ''; // Re-enable scrolling
                }
            });
        });
        
        // Close modal when clicking outside the content
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                const modal = e.target.closest('.modal');
                if (modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = ''; // Re-enable scrolling
                }
            }
        });
        
        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    activeModal.classList.remove('active');
                    document.body.style.overflow = ''; // Re-enable scrolling
                }
            }
        });
    }
    
    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', initializeModals);
    
    // Re-initialize when content changes
    document.addEventListener('contentUpdated', initializeModals);
})();