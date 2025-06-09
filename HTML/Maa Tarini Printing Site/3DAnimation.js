// JavaScript enhancements for MAA TARINI PRINTING PRESS site
// Focus on smooth scrolling, sticky navigation, and theme toggle with accessibility and minimal UI interactions.

// Smooth scrolling for anchor links with offset for sticky nav
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a[href^="#"], nav a[onclick]');
  const headerOffset = 70; // Approximate height of header/nav

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      let targetId = '';
      if(link.hasAttribute('href')) {
        targetId = link.getAttribute('href');
      } else if(link.hasAttribute('onclick')) {
        // For links with "onclick" scrollToSection
        const onclick = link.getAttribute('onclick');
        // Extract ID from scrollToSection('id')
        const match = onclick.match(/scrollToSection\\(['"](.+?)['"]\\)/);
        if(match && match[1]) targetId = '#' + match[1];
      }

      if(targetId && targetId.startsWith('#')) {
        const targetElem = document.querySelector(targetId);
        if(targetElem){
          const elementPosition = targetElem.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Theme toggle button (optional): insert a toggle button in header if not present
  if(!document.getElementById('theme-toggle-button')){
    const header = document.querySelector('header');
    if(header){
      const btn = document.createElement('button');
      btn.id = 'theme-toggle-button';
      btn.setAttribute('aria-label', 'Toggle light and dark mode');
      btn.textContent = '🌙 Dark Mode';
      btn.style.cursor = 'pointer';
      btn.style.marginLeft = '1rem';
      btn.style.padding = '0.3rem 0.8rem';
      btn.style.border = 'none';
      btn.style.borderRadius = '6px';
      btn.style.backgroundColor = '#1e40af';
      btn.style.color = 'white';
      btn.style.fontWeight = '600';
      btn.style.fontSize = '1rem';
      btn.style.transition = 'background-color 0.3s ease';
      btn.addEventListener('mouseenter', () => btn.style.backgroundColor = '#3b82f6');
      btn.addEventListener('mouseleave', () => btn.style.backgroundColor = '#1e40af');

      btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let isDark = document.body.classList.contains('dark-mode');
        btn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
      });
      header.appendChild(btn);
    }
  }
});

