document.addEventListener("DOMContentLoaded", function () {
    const yesButtons = document.querySelectorAll(".yes");
    const noButtons = document.querySelectorAll(".no");
    
    const yesRedirectLink = "https://www.facebook.com/ClinicaenadiccionesSentidoDeVidaGDL/";
    const noRedirectLink = "https://clinicasentidodevida.com.mx/";
    
    yesButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = yesRedirectLink;
        });
    });
    
    noButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = noRedirectLink;
        });
    });
});
