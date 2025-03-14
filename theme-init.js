(function() {
  // Check for saved theme preference and apply it immediately
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  }

  // Make the site title a link to the homepage
  document.addEventListener('DOMContentLoaded', function() {
    const siteTitle = document.querySelector('.site-title'); // Select the parent div
    const navLinks = document.querySelectorAll('nav ul li a'); // Select all nav links

    if (siteTitle) {
      let homeURL = 'index.html'; // Default for root pages
      let pathPrefix = ''; // Default prefix for nav links

      // Check if we're in the Articles subdirectory
      if (window.location.pathname.includes('/Articles/')) {
        homeURL = '../../index.html'; // Path for article pages
        pathPrefix = '../../'; // Prefix for nav links
      }

      // Apply to title
      const link = document.createElement('a');
      link.href = homeURL;
      link.style.textDecoration = 'none'; // Remove underline from the link
      link.style.color = 'inherit'; // Inherit color from parent
      link.style.display = 'block'; // Make the link a block-level element
      link.innerHTML = siteTitle.innerHTML;
      siteTitle.innerHTML = "";
      siteTitle.appendChild(link);

      // Update navigation links
      navLinks.forEach(link => {
        if (!link.href.startsWith('http')) { // Avoid changing external links
          link.href = pathPrefix + link.getAttribute('href'); // Adds correct prefix to the paths on all the links
        }
      });
    }
  });
})();