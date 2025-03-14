// theme-init.js
(function() {
  // Check for saved theme preference and apply it immediately
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  }
})();