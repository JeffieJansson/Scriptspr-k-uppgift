
// Funktion för att spåra händelse i Google Tag Manager
function trackEvent(eventName, eventData = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': eventName,
    ...eventData
  });
}



// Funktion för att visa eller dölja flaggan
function toggleFlag() {
  var flagContainer = document.getElementById('flagContainer');
  var flagButton = document.getElementById('flagButton');

  if (flagContainer.innerHTML === '') {
    getCountryCode().then(countryCode => {
      var flagImg = document.createElement('i');
      flagImg.className = `flag-icon flag-icon-${countryCode.toLowerCase()}`;
      flagContainer.appendChild(flagImg);
      console.log(`Användarens landskod: ${countryCode}`);
    }).catch(error => {
      console.error('Det uppstod ett fel:', error);
  




          // Spåra landskoden till GTM
          trackEvent('country_code_detected', { 'country_code': countryCode });
        }).catch(error => {
          console.error('Det uppstod ett fel:', error);
        });

    // Logga användarens lokala tid
    console.log(`Användarens lokala tid: ${new Date().toLocaleString()}`);

    flagButton.textContent = 'Dölj flagga';

      // Spåra klickhändelse på knappen till GTM
      trackEvent('flag_button_clicked');
  } else {
    flagContainer.innerHTML = ''; // Tömmer flaggans container
    flagButton.textContent = 'Visa flagga';
  }

  // Spåra händelse i Google Tag Manager
  // Exempel: window.dataLayer.push({ event: 'flag_displayed' });
}

// Lägg till händelselyssnare för knappen
var flagButton = document.getElementById('flagButton');
flagButton.addEventListener('click', toggleFlag);

