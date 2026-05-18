document.addEventListener("DOMContentLoaded", function() {
    
    var closeButton = document.getElementById("closePopup");
    var welcomePopup = document.getElementById("welcomePopup");

    if (closeButton && welcomePopup) {
        closeButton.addEventListener("click", function() {
            // Effet visuel de disparition
            welcomePopup.style.opacity = "0";
            
            // Retrait complet de l'élément après l'effet
            setTimeout(function() {
                welcomePopup.style.display = "none";
            }, 300);
        });
    } else {
        console.error("Éléments de la popup introuvables dans le DOM.");
    }

});
