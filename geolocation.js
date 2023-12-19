
  function getCountryCode() {
    return new Promise((resolve, reject) => {
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          resolve(data.country_code);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  function getGeolocation() {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        }, error => {
          reject(error);
        });
      } else {
        reject(new Error('Geolocation is not available'));
      }
    });
  }

  function trackEvent(eventName, eventData = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': eventName,
      ...eventData
    });
  }

  // Funktion för att hämta landskoden och spåra geolocation när sidan laddas
  function trackGeolocationAndCountryCodeOnPageLoad() {
    getCountryCode().then(countryCode => {
      console.log(`Användarens landskod: ${countryCode}`);

      // Spåra landskoden till GTM
      trackEvent('country_code_detected', { 'country_code': countryCode });
    }).catch(error => {
      console.error('Det uppstod ett fel vid hämtning av landskod:', error);
    });

    getGeolocation().then(coords => {
      console.log(`Användarens plats - Latitud: ${coords.latitude}, Longitud: ${coords.longitude}`);

      // Spåra geolocation till GTM
      trackEvent('geolocation_detected', coords);

      // Här kan du fortsätta med vad du vill göra med platstjänsten
    }).catch(error => {
      console.error('Det uppstod ett fel vid hämtning av geolocation:', error);
    });
  }

  // Kör funktionen för att hämta och spåra landskod och geolocation när sidan laddas
  trackGeolocationAndCountryCodeOnPageLoad();

