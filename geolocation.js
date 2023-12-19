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

function getUserLanguage() {
  return navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || '';
}

function trackEvent(eventName, eventData = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': eventName,
    ...eventData
  });
}

function trackGeolocationAndCountryCodeOnPageLoad() {
  getCountryCode().then(countryCode => {
    console.log(`Användarens landskod: ${countryCode}`);
    trackEvent('country_code_detected', { 'country_code': countryCode });
  }).catch(error => {
    console.error('Det uppstod ett fel vid hämtning av landskod:', error);
  });

  getGeolocation().then(coords => {
    console.log(`Användarens plats - Latitud: ${coords.latitude}, Longitud: ${coords.longitude}`);
    trackEvent('geolocation_detected', coords);
  }).catch(error => {
    console.error('Det uppstod ett fel vid hämtning av geolocation:', error);
  });

  const userLanguage = getUserLanguage();
  console.log(`Användarens språk: ${userLanguage}`);
  trackEvent('user_language_detected', { 'user_language': userLanguage });
}

trackGeolocationAndCountryCodeOnPageLoad();
