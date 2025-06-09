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

        // Navbar background change on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                nav.style.background = 'rgba(0, 0, 0, 0.9)';
            }
        });

        // Form submission
        document.querySelector('.reservation-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !phone || !date || !time || !guests) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show success message
            alert(`Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been received. We'll call you at ${phone} to confirm.`);
            
            // Reset form
            this.reset();
        });

        // Gallery item click interaction
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const overlay = this.querySelector('.gallery-overlay');
                const dishName = overlay.textContent;
                alert(`🍽️ ${dishName}\n\nThis delicious dish is available now! Make a reservation to try it.`);
            });
        });

        // Menu item hover effects
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });

        // Contact info click interactions
        document.querySelectorAll('.contact-item').forEach(item => {
            item.addEventListener('click', function() {
                const icon = this.querySelector('.contact-icon').textContent;
                const info = this.querySelector('div:last-child');
                const title = info.querySelector('h4').textContent;
                const content = info.querySelector('p').textContent;
                
                if (title === 'Phone') {
                    window.location.href = `tel:${content.replace(/\D/g, '')}`;
                } else if (title === 'Email') {
                    window.location.href = `mailto:${content}`;
                } else if (title === 'Address') {
                    alert(`📍 ${content}\n\nClick OK to open in maps!`);
                    // In a real website, you'd open Google Maps here
                }
            });
        });

        // Add floating animation to hero elements
        const floatingElements = document.querySelectorAll('.floating');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 2}s`;
        });

        // Scroll animations for sections
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections for scroll animations
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.6s ease';
            observer.observe(section);
        });

        // Set minimum date for reservation to today
        document.getElementById('date').min = new Date().toISOString().split('T')[0];