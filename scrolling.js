// Saving the previous scroll position to compare with the current one
// Listening for scroll events on the webpage
window.addEventListener('scroll', function() {
  // Sending the 'scroll_event' event to dataLayer on every scroll event
  dataLayer.push({
    'event': 'scroll_event'
    // Additional data attributes can be added here to send more detailed information on scroll events
  });
});

// Variable to store the previous scroll position
let previousScrollPosition = 0;

// Listening for scroll events and performing actions on each scroll
window.addEventListener('scroll', function() {
  // Get the current scroll position on the page
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  // Comparing previous and current scroll positions to determine direction
  if (currentScrollPosition > previousScrollPosition) {
    // If the user has scrolled downwards from one position to another
    console.log(`User has scrolled downwards from ${previousScrollPosition}px to ${currentScrollPosition}px`);
  } else {
    // If the user has scrolled upwards from one position to another
    console.log(`User has scrolled upwards from ${previousScrollPosition}px to ${currentScrollPosition}px`);
  }

  // Update the previous scroll position to be the current one
  previousScrollPosition = currentScrollPosition;
});
