var estadoLicuadora="apagada";
var licuadora = document.getElementById("blender");
var botonLicuadora = document.getElementById("blender-buttom-sound");
var sonidoLicuadora = document.getElementById("blender-sound");

function controlarLicuadora(){

    if (estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido";
        sonido();
        licuadora.classList.add("active");
        /* console.log("esta encendida") */
    }else{
        estadoLicuadora = "apagada"
        licuadora.classList.remove("active");
        sonido();
       /*  console.log("esta apagaste") */
    }
}
function sonido(){
    if (sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    }else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0 ;
    }
}