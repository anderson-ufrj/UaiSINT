/**
 * Main JavaScript for UAISINT website
 * 
 * This file initializes all functionality and includes
 * modules for different features.
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('UAISINT website loaded');
    
    // Initialize dark/light mode
    initializeThemeToggle();
    
    // Initialize animations
    initializeAnimations();
    
    // Custom event for when content is updated
    window.dispatchEvent(new CustomEvent('contentLoaded'));
});

// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }
    
    // Toggle theme when changed
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Initialize animations
function initializeAnimations() {
    // Add animation classes to elements as they scroll into view
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
    
    // Target elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}