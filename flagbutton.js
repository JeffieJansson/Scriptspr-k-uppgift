


var flagButton = document.querySelector("#flagButton");

// Hämta tidigare klick-räknare från localStorage vid sidans laddning
var clickCount = parseInt(localStorage.getItem('flagButtonClicks')) || 0;

// Visa antal klick för #flagButton vid sidans laddning
console.log("Antal klick för #flagButton: " + clickCount);

// Uppdatera texten eller någon annan representation för genomsnittligt antal klick
updateAverageClicks(clickCount);

// Öka klickräknaren för #flagButton vid varje klick
flagButton.addEventListener("click", function () {
  clickCount++;
  
  // Spara det uppdaterade värdet till localStorage
  localStorage.setItem('flagButtonClicks', clickCount.toString());
  

  
  // Uppdatera genomsnittligt antal klick
  updateAverageClicks(clickCount);
});

// Funktion för att uppdatera representationen för genomsnittligt antal klick
function updateAverageClicks(totalClicks) {
  // Beräkna och visa genomsnittligt antal klick på något sätt
  var averageClicks = totalClicks; // Här kan du göra beräkningar om det behövs
  console.log("Genomsnittligt antal klick på #flagButton: " + averageClicks);
  // Uppdatera UI eller annan representation av genomsnittligt antal klick
}





