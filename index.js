document.addEventListener("DOMContentLoaded", function() {
    
    var closeButton = document.getElementById("closePopup");
    var welcomePopup = document.getElementById("welcomePopup");

    if (closeButton && welcomePopup) {
        closeButton.addEventListener("click", function() {
            welcomePopup.style.opacity = "0";
            setTimeout(function() {
                welcomePopup.style.display = "none";
            }, 300);
        });
    }

});
