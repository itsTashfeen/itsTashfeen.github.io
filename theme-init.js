// theme-init.js
(function() {
  // Check for saved theme preference and apply it immediately
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  }

  // Make the site title a link to the homepage
  document.addEventListener('DOMContentLoaded', function() {
    const siteTitle = document.querySelector('.site-title h1');

    if (siteTitle) {
      const homeURL = 'index.html'; // Or your actual homepage URL

      const link = document.createElement('a');
      link.href = homeURL;
      link.style.textDecoration = 'none'; // Remove underline from the link
        link.style.color = 'inherit'; // Inherit color from parent
      // Copy the h1's content into the link
      link.innerHTML = siteTitle.innerHTML;

      // Replace the h1 with the link
      siteTitle.parentNode.replaceChild(link, siteTitle);
    }
  });
})();