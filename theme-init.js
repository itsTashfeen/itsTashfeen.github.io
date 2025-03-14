(function() {
  // Check for saved theme preference and apply it immediately
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  }

  // Make the site title a link to the homepage and update nav links
  document.addEventListener('DOMContentLoaded', function() {
    const siteTitle = document.querySelector('.site-title');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (siteTitle) {
      let homeURL = 'index.html';
      let pathPrefix = '';

      // Check if we're in the Articles subdirectory
      if (window.location.pathname.includes('/Articles/')) {
        homeURL = '../../index.html';
        pathPrefix = '../../';
      }

      // Apply to title
      const link = document.createElement('a');
      link.href = homeURL;
      link.style.textDecoration = 'none';
      link.style.color = 'inherit';
      link.style.display = 'block';
      link.innerHTML = siteTitle.innerHTML;
      siteTitle.innerHTML = "";
      siteTitle.appendChild(link);

      // Update navigation links
      navLinks.forEach(link => {
        if (!link.href.startsWith('http')) {
          link.href = pathPrefix + link.getAttribute('href');
        }
      });
    }

    // Inject the footer
    const footerContent = `
        <div class="copyright">
            © 2025 Tashfeen Omran. All rights reserved.
        </div>
        <div class="links">
            <a href="mailto:replytashfeen@gmail.com">Email</a> |
            <a href="https://twitter.com/OmranTashfeen">Twitter</a> |
            <a href="https://github.com/itsTashfeen">GitHub</a> |
        </div>
    `;

    const footer = document.createElement('footer');
    footer.innerHTML = footerContent;
    document.body.appendChild(footer);

    // Apply footer styles (you might need to adjust this)
    footer.style.marginTop = '70px';
    footer.style.paddingTop = '25px';
    footer.style.borderTop = '1px solid var(--border-color)';
    footer.style.fontSize = '0.9rem';
    footer.style.color = 'var(--text-muted)';
    footer.style.display = 'flex';
    footer.style.justifyContent = 'space-between';
    footer.style.flexWrap = 'wrap';
    footer.style.gap = '15px';
  });
})();