// footer-links.js

document.addEventListener('DOMContentLoaded', () => {
  // Example: Add tracking or alert on social link clicks
  const socialLinks = ['facebook-link', 'twitter-link', 'instagram-link'];

  socialLinks.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with actual link or open in new tab
        const url = el.getAttribute('href');
        if (url && url !== '#') {
          window.open(url, '_blank');
        } else {
          alert(`You clicked on ${id}. Please update the link.`);
        }
      });
    }
  });
});
