// theme-init.js
(function() {
  // Check for saved theme preference and apply it immediately
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  }

  // Make the site title a link to the homepage
  document.addEventListener('DOMContentLoaded', function() {
    const siteTitle = document.querySelector('.site-title'); // Select the parent div

    if (siteTitle) {
      const homeURL = 'index.html'; // Or your actual homepage URL

      const link = document.createElement('a');
      link.href = homeURL;
      link.style.textDecoration = 'none'; // Remove underline from the link
      link.style.color = 'inherit'; // Inherit color from parent
        link.style.display = 'block'; // Make the link a block-level element
        link.innerHTML = siteTitle.innerHTML
        siteTitle.innerHTML = ""
        siteTitle.appendChild(link)
      // Replace the h1 with the link
      //siteTitle.parentNode.replaceChild(link, siteTitle);
    }
  });
})();