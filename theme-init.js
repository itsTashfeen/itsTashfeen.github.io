(function() {
  // Check for saved theme preference and apply it immediately
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  }

  // Navigation links configuration in JSON format
  const navigationConfig = [
    { text: 'Home', href: 'index.html' },
    { text: 'Research', href: 'research.html' },
    { text: 'Articles', href: 'articles.html' },
    { text: 'About', href: 'about.html' },
    { text: 'Contact', href: 'contact.html' }
  ];

  document.addEventListener('DOMContentLoaded', function() {
    const siteTitle = document.querySelector('.site-title');
    let pathPrefix = '';
    let homeURL = 'index.html';

    // Add favicon dynamically
    function addFavicon() {
        const faviconLink = document.createElement('link');
        faviconLink.rel = 'icon';
        faviconLink.type = 'image/x-icon';
        faviconLink.href = pathPrefix + 'Resources/Favicons/favicon.ico';
        document.head.appendChild(faviconLink);
    }

    // Call the function to add favicon
    addFavicon();

    // Determine path prefix based on location
    if (window.location.pathname.includes('/Articles/')) {
      pathPrefix = '../../../';
      homeURL = '../../../index.html';
    }

    // Make the site title a link to the homepage
    if (siteTitle) {
      const link = document.createElement('a');
      link.href = homeURL;
      link.style.textDecoration = 'none';
      link.style.color = 'inherit';
      link.style.display = 'block';
      link.innerHTML = siteTitle.innerHTML;
      siteTitle.innerHTML = "";
      siteTitle.appendChild(link);
    }

    // Generate and inject the navigation
    const nav = document.querySelector('nav');
    if (nav) { //make sure there is a nav element
      const ul = document.createElement('ul');
      navigationConfig.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = pathPrefix + item.href;
        a.textContent = item.text;
        if (!a.href.startsWith('http')) {
          a.href = pathPrefix + a.getAttribute('href');
        }
        li.appendChild(a);
        ul.appendChild(li);
      });
      nav.appendChild(ul);
    }

    // Inject the footer
    const footerContent = `
        <div class="copyright">
            © 2025 Tashfeen Omran. All rights reserved.
        </div>
        <div class="links">
            <a href="mailto:replytashfeen@gmail.com">Email</a> |
            <a href="https://www.linkedin.com/in/tashfeenomran/">LinkedIn</a> |
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