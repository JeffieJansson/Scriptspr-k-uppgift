// Function to check if the user is on a mobile device
if (/Mobi|Android/i.test(navigator.userAgent)) {
  // If the user is on a mobile device, send the 'mobile_device' event to dataLayer
  dataLayer.push({
    'event': 'mobile_device'
  });
} else {
  // If the user is on a desktop, send the 'desktop_device' event to dataLayer
  dataLayer.push({
    'event': 'desktop_device'
  });
}

// Function to track the device type based on window size
function trackDeviceType() {
  if (window.innerWidth <= 768) {
    // If the window size is less than or equal to 768px, it's a mobile device
    console.log('Using a mobile device');
    // Specific actions or tracking for mobile devices can be performed here
  } else {
    // If the window size is larger than 768px, it's a desktop
    console.log('Using a desktop');
    // Specific actions or tracking for desktops can be performed here
  }
}

// Run the function on page load to determine the device type
trackDeviceType();
