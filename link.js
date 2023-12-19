// Track clicks on links
document.addEventListener('click', function(event) {
  // Check if the clicked element is a link (anchor tag)
  if (event.target.tagName.toLowerCase() === 'a') {
      // Push an event to dataLayer when a link is clicked
      dataLayer.push({
          'event': 'link_click'
          // Additional data attributes for link clicks can be added here if needed
      });

      // Log a message in the console when a link is clicked
      console.log('Link clicked:', event.target.href);
  }
});
