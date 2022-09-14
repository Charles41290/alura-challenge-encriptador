const inputText = document.querySelector(".text-input");
const outputText = document.querySelector(".text-output");
const btnCopiar = document.querySelector(".btn-copiar");
var mensajeVacio = document.querySelector(".mensaje-vacio");
//const inputText = document.getElementById('text-input');
//const outputText = document.getElementById('text-output');

function encriptar(stringToEncriptar){
    let arrayPatron =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //Convierto la cadena a letras minusculas
    stringToEncriptar = stringToEncriptar.toLowerCase();
    //let stringEncriptada;
    for(let i = 0; i < arrayPatron.length; i++){
        if(stringToEncriptar.includes(arrayPatron[i][0])){
            stringToEncriptar= stringToEncriptar.replaceAll(arrayPatron[i][0],arrayPatron[i][1]);
        }
    }
    return stringToEncriptar;
}

function desencriptar(stringToEncriptar){
    let arrayPatron =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringToEncriptar = stringToEncriptar.toLowerCase();
    for(let i = 0; i < arrayPatron.length; i++){
        if(stringToEncriptar.includes(arrayPatron[i][1])){
            stringToEncriptar= stringToEncriptar.replaceAll(arrayPatron[i][1],arrayPatron[i][0]);
        }
    }
    return stringToEncriptar;
}

function btnEncriptar(){
    if(inputText.value != ""){
        const textoEncriptado = encriptar(inputText.value);
        outputText.value = textoEncriptado;
        outputText.style.backgroundImage = "none";
        inputText.value = "";
        inputText.placeholder="Inserte texto aquí";
        btnCopiar.style.display ="block"
        mensajeVacio.style.display = "none"
        
    }else{
        mensajeVacio.style.display = "block"
    }
}

function btnDesencriptar(){
    if(inputText.value != ""){
        const textoEncriptado = desencriptar(inputText.value);
        outputText.value = textoEncriptado;
        outputText.style.backgroundImage = "none";
        inputText.value = "";
        btnCopiar.style.display ="block"
        mensajeVacio.style.display = "none"
    }else{
        mensajeVacio.style.display = "block"
    }
}

function copiar(){
    outputText.select(); // selecciona todo el texto contenido en el select area
    navigator.clipboard.writeText(outputText.value); // copia outputText al clipboard del navegador
    outputText.value ="" //limpio el panel de salida 
    inputText.focus();
    outputText.style.backgroundImage = "url('imgs/encriptar.jpg')";
    btnCopiar.style.display="none";

}

function limpiar(){
    inputText.placeholder="";
    //document.write("fuck");
}


// Para que el textholder vuelva a aparecer cuando se pierda el foco
inputText.addEventListener("blur", perderFoco, false);
function perderFoco(){
    inputText.placeholder ="Inserte su texto aquí"
}
