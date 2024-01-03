var startTime; // Variabel för att spara starttiden
var pageVisited = false; // Variabel för att hålla reda på om sidan har besökts

// Spara starttiden när sidan laddas
window.addEventListener("load", function () {
    startTime = new Date();
    pageVisited = true; // Uppdatera variabeln när sidan har besökts helt

    // Beräkna och logga genomsnittlig tid om det finns tidigare besökstider i localStorage
    var storedTimes = localStorage.getItem('visitTimes');
    if (storedTimes) {
        var visitTimes = JSON.parse(storedTimes);
        if (visitTimes.length > 0) {
            var total = visitTimes.reduce((acc, curr) => acc + curr);
            var averageSeconds = Math.floor(total / visitTimes.length / 1000);
            console.log("Genomsnittlig tid på sidan för besökare: " + averageSeconds + " sekunder.");
        }
    }
});

// Lägg till en händelselyssnare för att fånga sidans avstängning
window.addEventListener("beforeunload", function () {
    var endTime = new Date(); // Spara sluttiden när sidan stängs av

    // Om sidan har besökts, beräkna tidsskillnaden och spara den i localStorage
    if (pageVisited) {
        var timeDifference = endTime - startTime;

        // Hämta tidigare besökstider från localStorage och uppdatera listan
        var storedTimes = localStorage.getItem('visitTimes');
        var visitTimes = storedTimes ? JSON.parse(storedTimes) : [];
        visitTimes.push(timeDifference);

        // Spara den uppdaterade listan i localStorage
        localStorage.setItem('visitTimes', JSON.stringify(visitTimes));

        var secondsSpent = Math.floor(timeDifference / 1000);
        console.log("Besökare spenderade " + secondsSpent + " sekunder på sidan.");
    } else {
        console.log("Besökaren lämnade sidan utan att den laddades helt.");
    }
});




