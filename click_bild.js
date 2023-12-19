// Funktion för att spåra klickhändelser och flytta till sidans botten
const trackAndScroll = (e) => {
  e.preventDefault(); // Förhindra standardbeteende av högerklick

  // Kontrollera vilken typ av klick det är och logga det i konsolen
  const clickType = e.type === 'click' ? 'leftClick' : 'rightClick';
  console.log(`Klicktyp: ${clickType}`);

  // Lägg till spårning till Google Tag Manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: `${clickType}Event`, action: clickType, element: 'myImage' });

  // Flytta till sidans botten vid varje klick
  window.scrollTo(0, document.body.scrollHeight);
};

// Hämta referens till bilden
const imageElement = document.getElementById('myImage');

// Lägg till händelseslyssnare för vänsterklick och högerklick
imageElement.addEventListener('click', trackAndScroll);
imageElement.addEventListener('contextmenu', trackAndScroll);
