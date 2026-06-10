// Smooth scrolling untuk navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
document.querySelector('.contact-form form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    // Simulasi pengiriman form
    console.log('Form submitted:', {
        nama: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        pesan: this.querySelector('textarea').value
    });
    
    // Reset form
    this.reset();
    
    // Tampilkan pesan sukses (optional)
    alert('Terima kasih! Pesan Anda telah dikirim.');
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .about-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Add keyframe animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);