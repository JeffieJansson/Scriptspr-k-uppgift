// Function to save interactions
function saveInteraction(type, details) {
  // Here, you can call an API to save data to the server or use localStorage/IndexedDB for local storage
  console.log('click tracking:', type, details);
  // Example: Save to localStorage
  localStorage.setItem(type, JSON.stringify(details));
}



// Event listener for tracked form submissions
document.getElementById('trackedForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default behavior of the form
  // Extract form inputs and prepare data for storage
  const formInputs = Array.from(event.target.elements).reduce((data, element) => {
      if (element.tagName === 'INPUT') {
          data[element.name] = element.value;
      }
      return data;
  }, {});
  // Save the form submission interaction
  saveInteraction('Form Submission', formInputs);
});


