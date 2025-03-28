document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    this.reset();  // Clears the form fields

    const popup = document.createElement('div');
    popup.textContent = 'Message delivered';
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.background = '#4B4B4B';  // Dark grey background
    popup.style.color = 'transparent';
    popup.style.backgroundImage = 'linear-gradient(to right, #984391, #64abca)';
    popup.style.webkitBackgroundClip = 'text';
    popup.style.backgroundClip = 'text';
    popup.style.fontWeight = 'bold';
    popup.style.padding = '10px 20px';
    popup.style.border = '2px solid #984391';
    popup.style.borderRadius = '5px';
    popup.style.zIndex = '9999';
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.remove();
    }, 3000);
});

document.querySelector('.btn-box .btn:first-child').addEventListener('click', function() {
    window.open('RESUME_ANEESHA.pdf', '_blank');
});

document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.btn-box .btn:nth-child(2)');
  
    if (contactButton) {
      contactButton.addEventListener('click', function() {
        const contactSection = document.getElementById('contact');
  
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });



