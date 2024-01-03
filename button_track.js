// Retrieve click data from localStorage if available, otherwise create a new object
let clickData = localStorage.getItem('clickData') ? JSON.parse(localStorage.getItem('clickData')) : {};

// Function to log clicked button
function logClickedButton(element) {
  if (element.tagName.toLowerCase() === 'button') {
    const buttonId = element.id || 'no_id';
    console.log(`Clicked on button with ID: ${buttonId}`);
  }
}

// Function to save click event and update click data
function saveClickEvent(element) {
  let elementId;

  // Check the element type and assign a specific identifier
  if (element.tagName.toLowerCase() === 'button') {
    elementId = 'button_' + (element.id || 'no_id');
  } else if (element.tagName.toLowerCase() === 'img') {
    elementId = 'image_' + (element.id || 'no_id');
  } else if (element.tagName.toLowerCase() === 'a') {
    elementId = 'link_' + (element.href || 'no_href');
  } else {
    elementId = 'other_' + (element.tagName.toLowerCase() || 'no_tag');
  }

  // Update click data based on the identified element
  if (!clickData[elementId]) {
    clickData[elementId] = 1;
  } else {
    clickData[elementId]++;
  }
  localStorage.setItem('clickData', JSON.stringify(clickData)); // Save updated click data to localStorage

  // Send click event to Google Tag Manager with information about the clicked element
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'element_click', // Set the event name for GTM
    'clicked_element': elementId // Send the clicked element's identity as a custom variable
  });
}

// Event listener for all clicks on the page
document.addEventListener('click', function(event) {
  logClickedButton(event.target); // Log the clicked button

  saveClickEvent(event.target); // Save the clicked element
});

// Function to log click data in the console
function logClickData() {
  console.log('Click Data:', clickData);

  // Function to find the most clicked element
  function findMostClickedElement() {
    let mostClickedElement = null;
    let maxClicks = 0;

    for (const elementId in clickData) {
      if (clickData[elementId] > maxClicks) {
        maxClicks = clickData[elementId];
        mostClickedElement = elementId;
      }
    }

    return mostClickedElement;
  }

  // Find the most clicked element
  const mostClicked = findMostClickedElement();
  console.log('Most Clicked Element:', mostClicked);
  // Save `mostClicked` variable or its data in a way that suits your needs for further analysis or reporting

  // Loop through clickData and apply conditions
  for (const elementId in clickData) {
    if (clickData[elementId] > 70) {
      console.log(`Element with ID ${elementId} has been clicked more than 70 times wohoo.`);
      // Performing an action based on this condition
    }
  }

  Object.entries(clickData).forEach(([elementId, clickCount]) => {
    if (clickCount < 50) {
      console.log(`Element with ID ${elementId} has been clicked less than 50 times Bohoo.`);
      // Performing an action based on this condition
    }
  });
}

// Log click data and find the most clicked element when the page loads
window.onload = function() {
  logClickData();
};
