// Función para mostrar mensajes
function mostrarMensaje(titulo, mensaje, imagen) {
    document.getElementById("titulo-mensaje").textContent = titulo;
    document.getElementById("parrafo").textContent = mensaje;
    document.getElementById("sad-frog").src = imagen;
}

// Función para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptar() {
    let texto = document.getElementById("texto").value;

    if (texto.length === 0) {
        alert("Debes ingresar algún texto");
        mostrarMensaje("Ningún mensaje encontrado", "Ingresa el texto que deseas encriptar o desencriptar", "./IMÁGENES/sad frog.png");
        return; // Salir de la función si no hay texto
    }

    if (!validarTexto(texto)) {
        alert("¡Warning!, sólo minúsculas y sin acentos");
        mostrarMensaje("Ningún mensaje encontrado", "Ingresa el texto que deseas encriptar o desencriptar", "./IMÁGENES/sad frog.png");
        return; // Salir de la función si la validación falla
    }

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    document.getElementById("texto").value = textoCifrado;
    mostrarMensaje("Texto encriptado con éxito", "", "./IMÁGENES/happy frog.png");
}

function desencriptar() {
    let texto = document.getElementById("texto").value;

    if (texto.length === 0) {
        alert("Debes ingresar algún texto");
        mostrarMensaje("Ningún mensaje encontrado", "Ingresa el texto que deseas encriptar o desencriptar", "./IMÁGENES/sad frog.png");
        return; // Salir de la función si no hay texto
    }

    if (!validarTexto(texto)) {
        alert("¡Warning!, sólo minúsculas y sin acentos");
        mostrarMensaje("Ningún mensaje encontrado", "Ingresa el texto que deseas encriptar o desencriptar", "./IMÁGENES/sad frog.png");
        return; // Salir de la función si la validación falla
    }

    let textoDescifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    document.getElementById("texto").value = textoDescifrado;
    mostrarMensaje("Texto desencriptado con éxito", "", "./IMÁGENES/happy frog.png");
}
