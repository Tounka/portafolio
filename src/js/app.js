document.addEventListener('DOMContentLoaded', function(){
    sobreMi();
    desplazamientoDeFrame();
    
});

function desplazamientoDeFrame(){
    const framePrincipal = document.getElementById('framePrincipal');
    const framePrincipal2 = document.getElementById('sobreMi'); 
    const framePrincipal3 = document.getElementById('habilidades'); 
    const framePrincipal4 = document.getElementById('contacto');
    const portafolio = document.getElementById('portafolio');

    btnRegresar.forEach(function(btnRegresar) {
        btnRegresar.addEventListener('click', function() {
            framePrincipal.scrollIntoView({ behavior: 'smooth' });
        });
     });
     
     btnPortafolio.addEventListener('click', function() {
        portafolio.scrollIntoView({ behavior: 'smooth' });
    });
    btnIrHabilidades.addEventListener('click', function() {
        framePrincipal3.scrollIntoView({ behavior: 'smooth' });
    });
    btnIrSobreMi.addEventListener('click', function() {
        framePrincipal2.scrollIntoView({ behavior: 'smooth' });
    });
    btnIrContacto.addEventListener('click', function() {
        contacto.removeAttribute('hidden');
        framePrincipal.scrollIntoView();
        framePrincipal4.scrollIntoView({ behavior: 'smooth' });
        
    });

}


function sobreMi(){
    btnSobreMi.addEventListener("click", function(){
        
        sobreMiElement.removeAttribute('hidden');
        
        framePrincipal.scrollIntoView();

        framePortafolio.style.marginLeft = "100vw";
        frameContacto.style.marginLeft = "100vw";

    });



};

