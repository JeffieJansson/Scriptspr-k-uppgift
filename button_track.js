// Retrieve click data from localStorage if available, otherwise create a new object
let clickData = localStorage.getItem('clickData') ? JSON.parse(localStorage.getItem('clickData')) : {};


// Function to save click event and update click data
function saveClickEvent(elementId) {
  if (!clickData[elementId]) {
    clickData[elementId] = 1;
  } else {
    clickData[elementId]++;
  }
  localStorage.setItem('clickData', JSON.stringify(clickData)); // Spara uppdaterade klickdata till localStorage
  
  // Skicka klickhändelse till Google Tag Manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'button_click', // Ange händelsenamnet för GTM
    'clicked_button': 'click_' + elementId // Skicka knappens identitet som en anpassad variabel
  });
}

// Event listeners for buttons
document.getElementById('button1').addEventListener('click', function() {
  saveClickEvent('button1');
  // Call other functions or perform other actions on button click here
});

document.getElementById('button2').addEventListener('click', function() {
  saveClickEvent('button2');
  // Call other functions or perform other actions on button click here
});

document.getElementById('button3').addEventListener('click', function() {
  saveClickEvent('button3');
  // Call other functions or perform other actions on button click here
});

document.getElementById('buttonA').addEventListener('click', function() {
  saveClickEvent('buttonA');
  // Call other functions or perform other actions on button click here
});

document.getElementById('buttonB').addEventListener('click', function() {
  saveClickEvent('buttonB');
  // Call other functions or perform other actions on button click here
});


// Function to log click data in the console
function logClickData() {
  console.log('Click Data:', clickData);

  // Function to find the most clicked button
  function findMostClickedButton() {
    let mostClickedButton = null;
    let maxClicks = 0;

    for (const buttonId in clickData) {
      if (clickData[buttonId] > maxClicks) {
        maxClicks = clickData[buttonId];
        mostClickedButton = buttonId;
      }
    }

    return mostClickedButton;
  }

  // Find the most clicked button
  const mostClicked = findMostClickedButton();
  console.log('Most Clicked Button:', mostClicked);
  // Sparar `mostClicked` variabeln eller dess data på ett sätt som passar dina behov för senare analys eller rapportering
}

// Example of logging click data and finding the most clicked button when the page loads
window.onload = function() {
  logClickData();
};
