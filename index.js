$(document).ready(function() {
    
    // 1. Animation d'entrée (Zoom + Opacité) pour le message de bienvenue
    setTimeout(function() {
        $('#popupContent').css({
            'opacity': '1',
            'transform': 'scale(1)'
        });
    }, 200);

    // Fermeture de la popup lors du clic sur le bouton d'action
    $('#closePopup').click(function() {
        $('#welcomePopup').fadeOut(400);
    });

});
