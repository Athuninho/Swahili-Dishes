 var navLink = document.getElementById("nav-link");
        function showMenu() {
            navLink.style.right = "0";
        }
        function hideMenu() {
            navLink.style.right = "-200px";
        }

// Smooth scroll for links
document.querySelectorAll('nav a, .hero-btn').forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href').substring(1);
    if (targetId && document.getElementById(targetId)) {
      event.preventDefault();
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      hideMenu();
    }
  });
});

// Reservation form
const reservationForm = document.querySelector('.reservation form');
reservationForm.addEventListener('submit', event => {
  event.preventDefault();
  alert('Asante sana! Your reservation has been received.');
  reservationForm.reset();
});

// Dark/light mode toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  modeToggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌓';
});

