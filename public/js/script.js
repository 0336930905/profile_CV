document.addEventListener('DOMContentLoaded', function() {
    console.log('CV Website loaded successfully!');

    // ===== FADE IN ANIMATION ON SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.cv-section, .right-section').forEach(section => {
        section.classList.add('fade-in-element');
        fadeInObserver.observe(section);
    });

    // ===== TYPING EFFECT FOR NAME =====
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const nameText = nameElement.textContent;
        nameElement.textContent = '';
        nameElement.style.borderRight = '2px solid #000';
        
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < nameText.length) {
                nameElement.textContent += nameText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    nameElement.style.borderRight = 'none';
                }, 500);
            }
        }, 100);
    }

    // ===== ANIMATED ICONS =====
    document.querySelectorAll('.section-header i, .section-header-right i').forEach(icon => {
        icon.classList.add('animate__animated');
        
        icon.addEventListener('mouseenter', function() {
            this.classList.add('animate__rubberBand');
        });
        
        icon.addEventListener('animationend', function() {
            this.classList.remove('animate__rubberBand');
        });
    });

    // ===== PROFILE IMAGE HOVER EFFECT =====
    const profileImg = document.querySelector('.profile-image');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        profileImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // ===== CONTACT ITEMS ANIMATION =====
    document.querySelectorAll('.contact-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 1000 + (index * 100));
    });

    // ===== CV SECTIONS HOVER EFFECT =====
    document.querySelectorAll('.cv-section').forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });

    // ===== RIGHT SECTIONS HOVER EFFECT =====
    document.querySelectorAll('.right-section').forEach(section => {
        section.addEventListener('mouseenter', function() {
            const header = this.querySelector('.section-header-right');
            if (header) {
                header.style.transform = 'scale(1.05)';
                header.style.backgroundColor = '#f0f4f8';
            }
        });
        
        section.addEventListener('mouseleave', function() {
            const header = this.querySelector('.section-header-right');
            if (header) {
                header.style.transform = 'scale(1)';
                header.style.backgroundColor = 'white';
            }
        });
    });

    // ===== LINKS ANIMATION =====
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.textDecoration = 'underline';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // ===== PRINT FUNCTIONALITY =====
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            this.classList.add('animate__animated', 'animate__pulse');
            setTimeout(() => {
                window.print();
            }, 300);
            
            setTimeout(() => {
                this.classList.remove('animate__animated', 'animate__pulse');
            }, 1000);
        });
    }

    // ===== DOWNLOAD CV AS PDF (Simulation) =====
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            this.classList.add('animate__animated', 'animate__bounce');
            
            // Show notification
            showNotification('Đang chuẩn bị tải xuống CV...', 'info');
            
            setTimeout(() => {
                window.print();
                this.classList.remove('animate__animated', 'animate__bounce');
            }, 500);
        });
    }

    // ===== SHARE FUNCTIONALITY =====
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async function() {
            this.classList.add('animate__animated', 'animate__heartBeat');
            
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'CV - Nguyễn Hoàng Hảo',
                        text: 'Xem CV của tôi',
                        url: window.location.href
                    });
                    showNotification('Chia sẻ thành công!', 'success');
                } catch (err) {
                    console.log('Error sharing:', err);
                }
            } else {
                // Copy URL to clipboard
                navigator.clipboard.writeText(window.location.href);
                showNotification('Đã sao chép link CV!', 'success');
            }
            
            setTimeout(() => {
                this.classList.remove('animate__animated', 'animate__heartBeat');
            }, 1000);
        });
    }

    // ===== SCROLL TO TOP BUTTON =====
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        this.classList.add('animate__animated', 'animate__fadeOutUp');
        setTimeout(() => {
            this.classList.remove('animate__animated', 'animate__fadeOutUp');
        }, 1000);
    });

    // ===== NOTIFICATION SYSTEM =====
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type} animate__animated animate__slideInRight`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.remove('animate__slideInRight');
            notification.classList.add('animate__slideOutRight');
            
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    // ===== FLOATING PARTICLES BACKGROUND (Optional - only for left column) =====
    if (window.particlesJS) {
        // Create a canvas for particles in left column
        const leftColumn = document.querySelector('.left-column');
        const particlesDiv = document.createElement('div');
        particlesDiv.id = 'particles-js';
        particlesDiv.style.position = 'absolute';
        particlesDiv.style.width = '100%';
        particlesDiv.style.height = '100%';
        particlesDiv.style.top = '0';
        particlesDiv.style.left = '0';
        particlesDiv.style.zIndex = '0';
        particlesDiv.style.pointerEvents = 'none';
        
        if (leftColumn) {
            leftColumn.style.position = 'relative';
            leftColumn.insertBefore(particlesDiv, leftColumn.firstChild);
            
            // Make sure content is above particles
            Array.from(leftColumn.children).forEach(child => {
                if (child.id !== 'particles-js') {
                    child.style.position = 'relative';
                    child.style.zIndex = '1';
                }
            });
            
            particlesJS('particles-js', {
                particles: {
                    number: { value: 30, density: { enable: true, value_area: 800 } },
                    color: { value: '#ffffff' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.3, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ffffff',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: { enable: true, mode: 'grab' },
                        onclick: { enable: true, mode: 'push' },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 140, line_linked: { opacity: 0.5 } },
                        push: { particles_nb: 4 }
                    }
                },
                retina_detect: true
            });
        }
    }

    // ===== SMOOTH SCROLL FOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== CONSOLE ART =====
    console.log('%c👋 Chào mừng bạn đến với CV của tôi!', 'color: #3498db; font-size: 20px; font-weight: bold;');
    console.log('%c💼 Nguyễn Hoàng Hảo - Full Stack Developer', 'color: #2ecc71; font-size: 14px;');
    console.log('%c📧 nhao47111@gmail.com', 'color: #e74c3c; font-size: 12px;');
});
