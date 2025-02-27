document.addEventListener("DOMContentLoaded", function () {
    fetch("https://script.google.com/macros/s/AKfycbwazSaimkJBrWdKJ60KI6cq4rZ747EIcy6yQiMyM_vuaa5rV7Yuwuoj4WrR7IXWNDaa/exec")
        .then(response => response.json())
        .then(data => {
            console.log("Datos recibidos:", data); // Ver en la consola qué datos llegan

            // Suponiendo que el JSON tiene una estructura tipo { values: [...] }
            if (data && data.values) {
                mostrarGDD(data.values);
            } else {
                console.error("Formato de datos incorrecto", data);
            }
        })
        .catch(error => console.error("Error al obtener el GDD:", error));
});

function mostrarGDD(datos) {
    let contenedor = document.getElementById("gdd-container");

    if (!contenedor) {
        console.error("No se encontró el contenedor #gdd-container en el HTML");
        return;
    }

    contenedor.innerHTML = ""; // Limpiar contenido previo

    datos.forEach((fila, index) => {
        let filaHTML = `<div class="fila">
            <strong>${fila[0] || "Sin título"}</strong>: ${fila[1] || "Sin descripción"}
        </div>`;
        contenedor.innerHTML += filaHTML;
    });
}

