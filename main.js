// Obtener elementos del DOM con los nuevos IDs y clases en español
const botonEncriptar = document.getElementById('btn-encriptar');
const botonDesencriptar = document.getElementById('btn-desencriptar');
const botonCopiar = document.getElementById('btn-copiar');
const entradaTexto = document.getElementById('entrada-texto');
const areaVacio = document.getElementById('vacio');
const areaJs = document.getElementById('salida-js');

let salidaTexto = document.getElementById('texto-js');

function desencriptar(texto){
    for(const [clave, valor] of claves){
        texto = texto.replaceAll(valor, clave);
    }
    return texto;
}

function encriptar(texto){
    let salida = "";
    for(letra of texto){
        if(claves.has(letra)){
            salida += claves.get(letra);
        }else{
            salida += letra;
        }
    }
    return salida;
}

// Función para encriptar
botonEncriptar.onclick = function(){
    if(entradaTexto.value){
        areaVacio.style.display = "none";
        let textoEncriptado = encriptar(entradaTexto.value.toLowerCase());
        areaJs.style.display = "";
        salidaTexto.innerHTML = `${textoEncriptado}`;
        entradaTexto.value = "";
    }else{
        salidaTexto.innerHTML = "";
        areaJs.style.display = "none";
        areaVacio.style.display = "";
    }
}

// Función para desencriptar
botonDesencriptar.onclick = function(){
    if(entradaTexto.value){
        areaVacio.style.display = "none";
        let textoDesencriptado = desencriptar(entradaTexto.value.toLowerCase());
        areaJs.style.display = "";
        salidaTexto.innerHTML = `${textoDesencriptado}`;
        entradaTexto.value = "";
    }else{
        salidaTexto.innerHTML = "";
        areaJs.style.display = "none";
        areaVacio.style.display = "";
    }
}

// Función para copiar texto
botonCopiar.onclick = function(){
    let textoCopiado = salidaTexto.innerText;
    navigator.clipboard.writeText(textoCopiado);
}

// Mapeo de claves para encriptación
const claves = new Map([
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
]);

entradaTexto.value = "";
areaJs.style.display = "none";
