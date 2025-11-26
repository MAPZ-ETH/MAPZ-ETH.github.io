// Highlight active navigation item based on current URL
document.addEventListener('DOMContentLoaded', function() {
  // Get the current page path
  let currentPath = window.location.pathname;
  
  // Normalize the path (remove trailing slash except for root)
  if (currentPath !== '/' && currentPath.endsWith('/')) {
    currentPath = currentPath.slice(0, -1);
  }
  
  // Get only navigation links (exclude masthead title/logo)
  const navLinks = document.querySelectorAll('.visible-links a');
  
  navLinks.forEach(link => {
    let href = link.getAttribute('href');
    
    // Skip if no href
    if (!href) {
      return;
    }
    
    // Normalize href
    if (href !== '/' && href.endsWith('/')) {
      href = href.slice(0, -1);
    }
    
    // Check if this is the active page
    let isActive = false;
    
    // For root path
    if (currentPath === '/' && href === '/') {
      isActive = true;
    }
    // For other pages - exact match
    else if (currentPath !== '/' && currentPath === href) {
      isActive = true;
    }
    
    if (isActive) {
      link.classList.add('active');
    }
  });
});




