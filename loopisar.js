// Data Layer
let dataLayer = [
  { event: 'Click on Button A', time: '2023-12-15 10:00:00' },
  { event: 'Click on Button B', time: '2023-12-15 10:02:00' },
  { event: 'Click on Button 1', time: '2023-12-15 10:02:00' },
  { event: 'Click on Button 2', time: '2023-12-15 10:02:00' },
  { event: 'Click on Button 3', time: '2023-12-15 10:02:00' },
  { event: 'Form Submission', time: '2023-12-15 10:03:00', details: { inputExample: 'Sample text' } }
];

// Create a new data point representing the current local time
const now = new Date();

// Format the date and time into an appropriate format (yyyy-MM-dd HH:mm:ss)
const localTime = now.toLocaleString();

// Update the data layer with the current local time
dataLayer.forEach(item => {
item.time = localTime;
});

// Task 1: Loop through the existing data
dataLayer.forEach(event => {
console.log(`Event: ${event.event}, Time: ${event.time}`);
});

// Task 2: If new data, add it to the appropriate list
function logEvent(event, details) {
dataLayer.push({ event: event, time: localTime, details: details });
console.log(`Event: ${event}`);
}

// Task 3: If existing data, modify the data layer
function modifyData(event, newProperty) {
dataLayer.forEach(item => {
  if (item.event === event) {
    item.newProperty = newProperty;
  }
});
}

// Event listeners for buttons and form
document.getElementById('buttonA').addEventListener('click', function() {
logEvent('Click on Button A', null);
});

document.getElementById('buttonB').addEventListener('click', function() {
logEvent('Click on Button B', null);
});

document.getElementById('button1').addEventListener('click', function() {
logEvent('Click on Button 1', null);
});

document.getElementById('button2').addEventListener('click', function() {
logEvent('Click on Button 2', null);
});

document.getElementById('button3').addEventListener('click', function() {
logEvent('Click on Button 3', null);
});

document.getElementById('trackedForm').addEventListener('submit', function(event) {
event.preventDefault();
const formData = new FormData(event.target);
logEvent('Form Submission', Object.fromEntries(formData.entries()));
});

// Task 4: Filter which data to collect
// Here, events are logged; you can customize it according to your specific data collection needs
// For example, filter to collect specific events or types of events
document.querySelectorAll('button').forEach(button => {
button.addEventListener('click', function() {
  console.log(`Click on button: ${this.textContent}`);
  // Customize what you want to track for each button
});
});

document.querySelectorAll('input').forEach(input => {
input.addEventListener('focus', function() {
  console.log(`Focused on input: ${this.name}`);
  // Customize what you want to track for each input focus
});
});
