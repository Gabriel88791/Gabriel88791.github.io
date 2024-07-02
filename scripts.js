document.getElementById('show-content-button').addEventListener('click', function() {
    // Ocultar el botón al hacer clic
    document.getElementById('show-content-button').style.opacity = '0';
    document.getElementById('musicControlButton').style.display='inline-block';
    
    // Mostrar el contenido principal con animación
    var mainContent = document.getElementById('main-content');
    mainContent.classList.add('show');

    // Reproducir el audio de fondo
    const audio = document.getElementById('background-audio');
    audio.play();
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('musicControlButton').style.display='none';
    var countdownDate = new Date("Sep 13, 2024 19:30:00").getTime();

    var countdownFunction = setInterval(function () {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("timer").innerHTML = "¡La fiesta ha comenzado!";
            document.getElementById("wait-time").innerHTML = "";
        }
    }, 1000);

    const fixedButton = document.getElementById('celular1');

    fixedButton.addEventListener('click', function() {
        window.location.href = 'https://wa.me/15521801762?text=¡Hola!%20quiero%20confirmar%20mi%20asistencia%20a%20tu%20fiesta';
    });

    var boxes = document.querySelectorAll('.message-container, .dresscode, .pulsera');
    var lastScrollTop = 0;

    function checkVisibility() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        boxes.forEach(function(box) {
            var rect = box.getBoundingClientRect();
            var windowHeight = window.innerHeight;

            if (scrollTop > lastScrollTop && rect.top <= windowHeight && rect.bottom >= 0) {
                box.classList.add('visible');
            } else if (scrollTop < lastScrollTop) {
                box.classList.remove('visible');
            }
        });

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar números negativos en dispositivos móviles
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Para verificar la visibilidad al cargar la página

});

function toggleMusic() {
    const audio = document.getElementById('background-audio');
    if (audio.paused) {
        audio.play();
        document.getElementById('musicControlButton').innerHTML = "🔊";
    } else {
        audio.pause();
        document.getElementById('musicControlButton').innerHTML = "🔇";
    }
}
