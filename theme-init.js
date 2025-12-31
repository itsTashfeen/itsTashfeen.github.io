(function() {
  // Check for saved theme preference and apply it immediately
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  }

  // Header Configuration
  const headerConfig = {
    title: 'The Delta Donut',
    taglines: [
      'Personal online directory for all of my notes.',
      'Cooking stuff will be up soon!'
    ]
  };

  // Navigation links configuration
  const navigationConfig = [
    { text: 'Home', href: 'index.html' },
    { text: 'Notes', href: 'notes.html' },
    { text: 'Bookshelf', href: 'Bookshelf.html' },
    { text: 'Poker', href: 'poker.html' },
  ];

  // Inject brutalist styles
  function injectBrutalistStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* BRUTALIST THEME - MONOCHROME */
      :root {
          --bg-primary: #ffffff;
          --bg-secondary: #f5f5f5;
          --bg-card: #fafafa;
          --text-primary: #000000;
          --text-secondary: #333333;
          --text-muted: #666666;
          --accent-primary: #000000;
          --accent-secondary: #333333;
          --border-color: #000000;
          --card-shadow: none;
          --tag-bg: #000000;
          --tag-color: #ffffff;
          --code-bg: #f0f0f0;
          --blockquote-bg: #f5f5f5;
          --blockquote-border: #000000;
      }

      .dark-theme {
          --bg-primary: #000000;
          --bg-secondary: #0a0a0a;
          --bg-card: #111111;
          --text-primary: #ffffff;
          --text-secondary: #cccccc;
          --text-muted: #999999;
          --accent-primary: #ffffff;
          --accent-secondary: #cccccc;
          --border-color: #ffffff;
          --card-shadow: none;
          --tag-bg: #ffffff;
          --tag-color: #000000;
          --code-bg: #1a1a1a;
          --blockquote-bg: #0a0a0a;
          --blockquote-border: #ffffff;
      }

      * {
          transition: background 0.3s, color 0.3s, border-color 0.3s !important;
      }

      body {
          font-family: 'Courier New', 'Courier', monospace !important;
          background-color: var(--bg-primary) !important;
          color: var(--text-primary) !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 20px !important;
      }

      h1, h2, h3, h4, h5, h6 {
          font-family: 'Courier New', 'Courier', monospace !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: -1px !important;
          color: var(--text-primary) !important;
      }

      h1 {
          font-size: 2.5rem !important;
          letter-spacing: -2px !important;
      }

      h2 {
          font-size: 2rem !important;
          border-bottom: 4px solid var(--border-color) !important;
          padding-bottom: 0.5rem !important;
      }

      h2::after {
          display: none !important;
      }

      a {
          color: var(--accent-primary) !important;
          text-decoration: underline !important;
          text-decoration-thickness: 2px !important;
      }

      a:hover {
          opacity: 0.7 !important;
      }

      header {
          border-bottom: 4px solid var(--border-color) !important;
          margin-bottom: 50px !important;
          padding-bottom: 20px !important;
      }

      .site-title h1 {
          margin-bottom: 0.3rem !important;
      }

      .site-title p {
          font-size: 0.75rem !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          font-weight: 700 !important;
          color: var(--text-secondary) !important;
      }

      nav ul {
          gap: 0 !important;
          border-top: 3px solid var(--border-color);
          border-bottom: 3px solid var(--border-color);
          padding: 0 !important;
      }

      nav li {
          border-right: 3px solid var(--border-color);
      }

      nav li:last-child {
          border-right: none;
      }

      nav a {
          text-decoration: none !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          padding: 12px 20px !important;
          display: block !important;
          font-size: 0.9rem !important;
          color: var(--text-primary) !important;
      }

      nav a:hover {
          background: var(--text-primary) !important;
          color: var(--bg-primary) !important;
          opacity: 1 !important;
      }

      .theme-toggle {
          background: var(--bg-primary) !important;
          border: 3px solid var(--border-color) !important;
          padding: 10px 20px !important;
          font-family: 'Courier New', 'Courier', monospace !important;
          font-size: 0.85rem !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          color: var(--text-primary) !important;
          cursor: pointer !important;
          border-radius: 0 !important;
      }

      .theme-toggle:hover {
          background: var(--text-primary) !important;
          color: var(--bg-primary) !important;
      }

      .theme-toggle span {
          color: inherit !important;
      }

      .theme-icon {
          display: none !important;
      }

      .article-card, .featured-paper, .folder-nav, .markdown-content {
          border: 3px solid var(--border-color) !important;
          background-color: var(--bg-card) !important;
          box-shadow: none !important;
          border-radius: 0 !important;
      }

      .article-card:hover, .featured-paper:hover {
          transform: none !important;
          background: var(--text-primary) !important;
          color: var(--bg-primary) !important;
      }

      .article-card:hover *, .featured-paper:hover * {
          color: var(--bg-primary) !important;
      }

      .article-card:hover .tag {
          background: var(--bg-primary) !important;
          color: var(--text-primary) !important;
          border-color: var(--bg-primary) !important;
      }

      .article-meta {
          text-transform: uppercase !important;
          font-size: 0.7rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.5px !important;
      }

      .article-meta::before {
          display: none !important;
      }

      .tag, .paper-tag {
          background: var(--tag-bg) !important;
          color: var(--tag-color) !important;
          border: 2px solid var(--border-color) !important;
          border-radius: 0 !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          font-size: 0.7rem !important;
          letter-spacing: 0.5px !important;
      }

      .read-more, .paper-link {
          text-transform: uppercase !important;
          font-weight: 900 !important;
          letter-spacing: 1px !important;
          font-size: 0.85rem !important;
          text-decoration: none !important;
          border-bottom: 3px solid currentColor !important;
          padding-bottom: 2px !important;
          border-radius: 0 !important;
      }

      .read-more::after {
          content: "" !important;
      }

      .paper-link {
          display: inline-block !important;
          background: var(--text-primary) !important;
          color: var(--bg-primary) !important;
          padding: 10px 20px !important;
          border: 3px solid var(--border-color) !important;
          border-bottom: 3px solid var(--border-color) !important;
      }

      .paper-link:hover {
          background: var(--bg-primary) !important;
          color: var(--text-primary) !important;
      }

      .folder-link {
          border-radius: 0 !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          font-size: 0.85rem !important;
          letter-spacing: 0.5px !important;
      }

      .folder-link:hover {
          background-color: var(--text-primary) !important;
          color: var(--bg-primary) !important;
      }

      code {
          font-family: 'Courier New', 'Courier', monospace !important;
          background-color: var(--code-bg) !important;
          border: 1px solid var(--border-color) !important;
          border-radius: 0 !important;
      }

      pre {
          background-color: var(--code-bg) !important;
          border: 3px solid var(--border-color) !important;
          border-radius: 0 !important;
      }

      blockquote {
          border-left: 5px solid var(--blockquote-border) !important;
          background-color: var(--blockquote-bg) !important;
          border-radius: 0 !important;
          font-weight: 700 !important;
      }

      footer {
          border-top: 4px solid var(--border-color) !important;
          font-size: 0.75rem !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
      }

      footer a {
          text-decoration: none !important;
          border-bottom: 2px solid var(--text-primary) !important;
          padding-bottom: 1px !important;
      }

      button {
          font-family: 'Courier New', 'Courier', monospace !important;
          border-radius: 0 !important;
      }

      .about-image img {
          border: 4px solid var(--border-color) !important;
          border-radius: 0 !important;
      }

      .folder-icon {
          width: 20px !important;
          height: 20px !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
          background-size: contain !important;
      }

      .folder-closed {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H20C20.5523 5 21 5.44772 21 6V9H4V18.0351L5.4099 11.9636C5.84792 10.0698 7.55185 8.75 9.50039 8.75H21C21.5523 8.75 22 9.19772 22 9.75V20C22 20.5523 21.5523 21 21 21H3ZM5.7149 10.7136L4.00001 18.0351V19H20V10.75H9.50039C8.52611 10.75 7.67645 11.4102 7.45743 12.3562L5.7149 10.7136Z'%3E%3C/path%3E%3C/svg%3E") !important;
      }

      .dark-theme .folder-closed {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H20C20.5523 5 21 5.44772 21 6V9H4V18.0351L5.4099 11.9636C5.84792 10.0698 7.55185 8.75 9.50039 8.75H21C21.5523 8.75 22 9.19772 22 9.75V20C22 20.5523 21.5523 21 21 21H3ZM5.7149 10.7136L4.00001 18.0351V19H20V10.75H9.50039C8.52611 10.75 7.67645 11.4102 7.45743 12.3562L5.7149 10.7136Z'%3E%3C/path%3E%3C/svg%3E") !important;
      }

      .file-icon {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z'%3E%3C/path%3E%3C/svg%3E") !important;
      }

      .dark-theme .file-icon {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z'%3E%3C/path%3E%3C/svg%3E") !important;
      }

      @media (max-width: 700px) {
          nav li {
              border-right: none !important;
              border-bottom: 2px solid var(--border-color) !important;
          }
          
          nav li:last-child {
              border-bottom: none !important;
          }
      }
    `;
    document.head.appendChild(style);
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Inject brutalist styles first
    injectBrutalistStyles();

    const header = document.querySelector('header');
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

    addFavicon();

    // Determine path prefix based on location
    if (window.location.pathname.includes('/Articles/')) {
      pathPrefix = '../../../';
      homeURL = '../../../index.html';
    }

    // Inject header content
    if (header) {
      const siteTitleDiv = document.createElement('div');
      siteTitleDiv.className = 'site-title';

      const titleLink = document.createElement('a');
      titleLink.href = homeURL;
      titleLink.style.textDecoration = 'none';
      titleLink.style.color = 'inherit';
      const h1 = document.createElement('h1');
      h1.textContent = headerConfig.title;
      titleLink.appendChild(h1);
      siteTitleDiv.appendChild(titleLink);

      headerConfig.taglines.forEach(taglineText => {
        const p = document.createElement('p');
        p.textContent = taglineText;
        siteTitleDiv.appendChild(p);
      });

      header.prepend(siteTitleDiv);
    }

    // Generate and inject navigation
    const nav = document.querySelector('nav');
    if (nav) {
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

    // Update theme toggle to show text instead of icons
    const themeToggle = document.getElementById('themeToggle');
    const themeText = document.getElementById('themeText');
    if (themeToggle && themeText) {
      themeText.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
      themeToggle.style.display = 'flex';
      themeToggle.style.alignItems = 'center';
      themeToggle.style.gap = '0';
    }

    // Inject footer
    const footerContent = `
        <div class="copyright">
            © 2025 Tashfeen Omran
        </div>
        <div class="links">
            <a href="mailto:replytashfeen@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/tashfeenomran/">LinkedIn</a>
            <a href="https://github.com/itsTashfeen">GitHub</a>
        </div>
    `;

    const footer = document.createElement('footer');
    footer.innerHTML = footerContent;
    document.body.appendChild(footer);
  });
})();