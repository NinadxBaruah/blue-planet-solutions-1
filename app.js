
// GSAP Scroll Animations
// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carousel functionality
class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.slides = Array.from(carouselElement.querySelectorAll('.carousel-slide'));
        this.dots = Array.from(carouselElement.querySelectorAll('.carousel-dot'));
        this.currentSlide = 0;

        // Initialize first slide
        this.slides[0].classList.add('active');
        this.dots[0].classList.add('active');

        // Set up dot click events
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Auto-advance slides
        this.startAutoAdvance();
    }

    goToSlide(slideIndex) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');

        // Set new current slide
        this.currentSlide = slideIndex;

        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        let nextSlideIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextSlideIndex);
    }

    startAutoAdvance() {
        this.autoAdvanceInterval = setInterval(() => {
            this.nextSlide();
        }, 10000); // Change slide every 5 seconds
    }
}

// Initialize Carousel
document.addEventListener('DOMContentLoaded', () => {
gsap.registerPlugin(ScrollTrigger);

    new Carousel(document.querySelector('.hero-carousel'));
    
    
// Animate services section grid
// gsap.from(".services-grid", {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".services-grid",
//         start: "top 80%", // Animation starts when 80% of the viewport is visible
//     },
// });

// Animate testimonial section grid
gsap.from(".testimonial-grid", {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: ".testimonial-grid",
        start: "top 80%",
    },
});


// serviceCards.forEach(card => {
//     card.addEventListener("mouseenter", () => {
//         gsap.to(card, { scale: 1.1, duration: 0.3 });
//     });
//     card.addEventListener("mouseleave", () => {
//         gsap.to(card, { scale: 1, duration: 0.3 });
//     });
// });

// Hero Text Animation (on page load)
gsap.from(".carousel-content h1", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
gsap.from(".carousel-content p", { y: 50, opacity: 0, duration: 1, delay: 1 });
gsap.from(".cta-buttons", { y: 50, opacity: 0, duration: 1, delay: 1.5 });

// Products section animation
gsap.from(".products-section", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".products-section",
        start: "top 80%", // Trigger when the section is 80% visible
        once: true, // Ensure it only triggers once
    },
});

// Animate product items as they enter the viewport
gsap.utils.toArray(".new-product-item").forEach((product, index) => {
    gsap.from(product, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3, // Staggered animation for each product card
        scrollTrigger: {
            trigger: product,
            start: "top 90%", // Trigger when the card is 80% visible
        },
    });
});

// Select all service cards
// const serviceCards = document.querySelectorAll(".service-card");
const serviceCards = document.querySelectorAll(".service-card");

  // Extra check to ensure ScrollTrigger is available
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.error('GSAP or ScrollTrigger not loaded');
    return;
  }

  
  if (serviceCards.length === 0) {
    console.error('No service cards found');
    return;
  }

// Animate each card individually
// Ensure GSAP and ScrollTrigger are registered

// Select all service cards

console.log('Services Cards:', document.querySelectorAll('.service-card'));
  

  // Create individual scroll triggers for each card
  sap.utils.toArray('.service-card').forEach((card, index) => {
    const direction = index % 2 === 0 ? -100 : 100; // Alternate left and right entry
    
    gsap.fromTo(
      card,
      { 
        opacity: 0, 
        x: direction,
        scale: 0.9 
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 90%"
        }
      }
    );
  });
});


