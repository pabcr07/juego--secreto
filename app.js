let numeroSecreto = 0
let intentos = 0
let listaNumerosSorteados = []
let numeroMaximo = 100

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    intentos++

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${intentos == 1? "intento":"intentos   "}` )
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else if(numeroDeUsuario < numeroSecreto){
        asignarTextoElemento("p","El numero secreto es mayor")
    } else{
        asignarTextoElemento("p","El numero secreto es menor")
    }

    limpiarInput()

    return;

}
    


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto

}

function generarNumeroSecreto(){
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles")
    }else {
        if (listaNumerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroSecreto)
            return numeroSecreto;
        }
    }

    
}

function limpiarInput(){
    document.querySelector("#valorUsuario").value = "";
    
}

function reiniciarJuego(){
    limpiarInput();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled","true")
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto")
    asignarTextoElemento("p",`Elegí un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 0
}

condicionesIniciales();
