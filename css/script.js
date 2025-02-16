fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
    
    // Disparar un evento para indicar que el navbar se cargó
    document.dispatchEvent(new Event("navbarLoaded"));
  })
  .catch(error => console.error("Error al cargar navbar:", error));




  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("navbarLoaded", () => {
        const sliderBox = document.querySelector(".juegos-container");

        if (!sliderBox) {
            console.warn("Elemento .juegos-container no encontrado.");
            return;
        }

        const toggleAnimation = (state) => {
            sliderBox.style.animationPlayState = state;
        };

        sliderBox.addEventListener("mouseenter", () => toggleAnimation("paused"));
        sliderBox.addEventListener("mouseleave", () => toggleAnimation("running"));
    });
});


