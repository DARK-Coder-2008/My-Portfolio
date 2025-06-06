// Typed.js already initialized inline, so skipping here
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Game Developer'],
    typeSpeed: 25,
    loop: true
});

// Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('sticky', window.scrollY > 50);
});

// Scroll to Top Button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #6f42c1;
  color: white;
  border: none;
  padding: 10px 12px;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  z-index: 1000;
  font-size: 16px;
`;
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.vertical');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Theme Toggle Button
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌙';
themeToggle.title = 'Toggle Theme';
themeToggle.style.cssText = `
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #6f42c1;
  color: white;
  border: none;
  padding: 10px 12px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  font-size: 18px;
`;

document.body.appendChild(themeToggle);

let dark = true;
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    dark = !dark;
    themeToggle.textContent = dark ? '☀️' : '🌙';
});

// Optional Light Theme CSS support
const style = document.createElement('style');
style.innerHTML = `
  body.light-theme {
    background-color:rgb(75, 102, 128);
    color: black;
  }
  body.light-theme nav {
    background-color:rgb(124, 153, 233);
    color: black;
  }
  body.light-theme a {
    color: #6f42c1;
  }
`;
document.head.appendChild(style);
