// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 51, 102, 0.95)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'var(--primary-color)';
        header.style.padding = '15px 0';
    }
});

// Service cards animation
const serviceCards = document.querySelectorAll('.service-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

serviceCards.forEach(card => {
    observer.observe(card);
});

// Reviews slider auto-scroll
const reviewsSlider = document.querySelector('.reviews-slider');
let isScrolling = false;

function autoScrollReviews() {
    if (!isScrolling) {
        isScrolling = true;
        
        const scrollAmount = reviewsSlider.scrollLeft + 320;
        const maxScroll = reviewsSlider.scrollWidth - reviewsSlider.clientWidth;
        
        if (scrollAmount >= maxScroll) {
            reviewsSlider.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            reviewsSlider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
        
        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }
}

// Start auto-scroll after page loads
window.addEventListener('load', () => {
    setInterval(autoScrollReviews, 4000);
});

// WhatsApp Form Submission
const whatsappForm = document.getElementById('whatsapp-form');

whatsappForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    const whatsappMessage = `Hello Zivanai Karembera Construction!%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
    
    const whatsappURL = `https://wa.me/27624198345?text=${whatsappMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    // Reset form
    whatsappForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Initialize animations on page load
window.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to elements as they come into view
    const fadeElements = document.querySelectorAll('.service-card, .review-card, .contact-info, .contact-form');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s forwards';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
});