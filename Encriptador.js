let mensaje = document.querySelector("#texto-input");
let salida = document.querySelector(".mensajeOut").style.display = "block";

let btnEncriptar = document.querySelector(".boton-encriptar");
let btnDesencriptar = document.querySelector(".boton-desencriptar");
let btnCopiar = document.querySelector(".boton-copiar").style.display = "none";

let noAceptable = "ABCDEFGHIJKLMNOPQRSTUVWXYZáéíóú0123456789";

function verificar (texto){
    for(i=0; i<texto.length;i++)
    {
        if (noAceptable.indexOf(texto.charAt(i),0)!=-1)
        {
            return true;
        }
    }
    return false;
}

function encriptar(){
    if(verificar(mensaje.value))
    {
        alert("Ingrese solo letras, minúsculas y sin acentos")
        return "";
    }
    else
    {
        let textoAencriptar = clear(mensaje.value);
        let textoEncriptado = (mensaje.value);

        textoEncriptado = textoAencriptar.replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat")

        document.querySelector(".mensajeOut").innerHTML = textoEncriptado;    
        mensaje.value = "";
        document.querySelector(".boton-copiar").style.display = "block";
        return textoEncriptado;
    }
}

function desencriptar(){
    if(verificar(mensaje.value))
    {
        alert("Ingrese solo letras, minúsculas y sin acentos")
        return "";
    }
    else
    {
        let textoAencriptar = clear(mensaje.value);
        let textoDesencriptado = (mensaje.value);

        textoDesencriptado = textoAencriptar.replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u")

        document.querySelector(".mensajeOut").innerHTML = textoDesencriptado;   
        mensaje.value = "";
        document.querySelector(".boton-copiar").style.display = "block";
        return textoDesencriptado;
    }
}

function clear(texto){
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
}

function copiar(){
    var hide = document.createElement("input");

    hide.setAttribute("value",document.querySelector(".mensajeOut").innerHTML);
    document.body.appendChild(hide);
    hide.select();
    document.execCommand("copy");
    document.body.removeChild(hide);
    document.querySelector(".mensajeOut").innerHTML = "";
    document.querySelector(".boton-copiar").style.display = "none";
}