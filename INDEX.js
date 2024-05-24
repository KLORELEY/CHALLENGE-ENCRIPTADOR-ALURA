function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    if (texto.length === 0) {
        alert("Debes ingresar algún texto");
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        muñeco.src = "./IMÁGENES/sad frog.png";
        return; // Salir de la función si no hay texto
    }

    // Expresión regular para validar que el texto sólo contenga letras minúsculas sin acentos
    let regex = /^[a-z\s]+$/;

    if (!regex.test(texto)) {
        alert("¡Warning!, sólo minúsculas y sin acentos");
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        muñeco.src = "./IMÁGENES/sad frog.png";
        return; // Salir de la función si la validación falla
    }

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./IMÁGENES/happy frog.png";
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    if (texto.length === 0) {
        alert("Debes ingresar algún texto");
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        muñeco.src = "./IMÁGENES/sad frog.png";
        return; // Salir de la función si no hay texto
    }

    // Expresión regular para validar que el texto sólo contenga letras minúsculas sin acentos
    let regex = /^[a-z\s]+$/;

    if (!regex.test(texto)) {
        alert("¡Warning!, sólo minúsculas y sin acentos");
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        muñeco.src = "./IMÁGENES/sad frog.png";
        return; // Salir de la función si la validación falla
    }

    let textoDescifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    document.getElementById("texto").value = textoDescifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./IMÁGENES/happy frog.png";
}
