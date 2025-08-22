// Toggle menu for mobile
function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}

// Smooth scroll for nav links
document.querySelectorAll('nav a, .navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    document.getElementById('navbar').classList.remove('active');

    document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});
