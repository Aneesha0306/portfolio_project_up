document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  this.reset();

  let popup = document.createElement('div');
  popup.textContent = 'Message delivered';
  popup.classList.add('popup');
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);
});

document.querySelector('.btn-box .btn:first-child').addEventListener('click', function () {
  window.open('RESUME_ANEESHA.pdf', '_blank');
});

document.addEventListener('DOMContentLoaded', function () {
  const contactButton = document.querySelector('.btn-box .btn:nth-child(2)');

  if (contactButton) {
    contactButton.addEventListener('click', function () {
      const contactSection = document.getElementById('contact');

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});



