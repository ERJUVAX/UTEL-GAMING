const apiKey = 'efd2156a99624722804a45b8266aa500'; // Tu clave API
const apiUrl = `https://newsapi.org/v2/everything?q=videojuegos&language=es&sortBy=publishedAt&apiKey=${apiKey}`;

// Función para obtener y mostrar las noticias usando el proxy de AllOrigins
async function cargarNoticias() {
    try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`);
        const data = await response.json();
        
        // Convertimos el contenido en JSON válido
        const noticias = JSON.parse(data.contents);

        if (noticias.status === "ok") {
            mostrarNoticias(noticias.articles);
        } else {
            console.error('Error al obtener noticias:', noticias.message);
        }
    } catch (error) {
        console.error('Error en la conexión a la API:', error);
    }
}

// Función para mostrar las noticias en el contenedor
function mostrarNoticias(articles) {
    const noticiasContainer = document.getElementById('noticias-container');
    noticiasContainer.innerHTML = ''; // Limpiar antes de agregar nuevas noticias

    articles.forEach(article => {
        const noticiaDiv = document.createElement('div');
        noticiaDiv.classList.add('noticia');

        const noticiaHTML = `
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description || 'Sin descripción disponible'}</p>
            ${article.urlToImage ? `<img src="${article.urlToImage}" alt="${article.title}" class="noticia-imagen">` : ''}
        `;
        
        noticiaDiv.innerHTML = noticiaHTML;
        noticiasContainer.appendChild(noticiaDiv);
    });
}

// Llamamos a la función para cargar las noticias
cargarNoticias();
