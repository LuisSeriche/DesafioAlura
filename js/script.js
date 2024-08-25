var textoPorDefecto; // Variable para almacenar el texto por defecto

window.onload = function() {
    var div = document.getElementById("cajaResp");
    // Guarda el contenido HTML por defecto
    textoPorDefecto = div.innerHTML;
};

function encripta() {
    var textoIngresado = document.getElementById("ingresado").value;
    var div = document.getElementById("cajaResp");
    var resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('resultado');

    if (textoIngresado.trim() !== "") {
        // Reemplazar las vocales con las cadenas especificadas
        var textoEncriptado = textoIngresado
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        resultadoDiv.innerText = textoEncriptado;
        div.innerHTML = ''; // Limpiar el contenido anterior
        div.appendChild(resultadoDiv);
        addCopyButton(div, textoEncriptado); // Añadir botón de copiar
    } else {
        // Si el textarea está vacío, mostrar el texto por defecto
        div.innerHTML = textoPorDefecto;
    }
}

function desencripta() {
    var textoIngresado = document.getElementById("ingresado").value;
    var div = document.getElementById("cajaResp");
    var resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('resultado');

    if (textoIngresado.trim() !== "") {
        // Restaurar el texto original reemplazando las cadenas en el orden inverso
        var textoRestaurado = textoIngresado
            .replace(/ufat/g, "u")
            .replace(/ober/g, "o")
            .replace(/ai/g, "a")
            .replace(/imes/g, "i")
            .replace(/enter/g, "e");

        resultadoDiv.innerText = textoRestaurado;
        div.innerHTML = ''; // Limpiar el contenido anterior
        div.appendChild(resultadoDiv);
        addCopyButton(div, textoRestaurado); // Añadir botón de copiar
    } else {
        // Si el textarea está vacío, mostrar el texto por defecto
        div.innerHTML = textoPorDefecto;
    }
}

function addCopyButton(div, textToCopy) {
    var existingButton = div.querySelector('.copiar-btn');
    if (existingButton) {
        existingButton.remove();
    }

    var copyButton = document.createElement('button');
    copyButton.classList.add('copiar-btn');
    copyButton.innerText = 'Copiar';
    copyButton.onclick = function() {
        navigator.clipboard.writeText(textToCopy).then(function() {
            alert('Texto copiado al portapapeles');
        }, function(err) {
            alert('Error al copiar el texto: ' + err);
        });
    };

    div.appendChild(copyButton);
}