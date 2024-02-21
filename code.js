

function ajustarLayout() {
    var videoWidth = document.querySelector('#video').offsetWidth; // Obtém a largura do elemento #video
    var imageBoxes = document.querySelectorAll('.card .image-box');
    var name = document.querySelector('.name-job');

    imageBoxes.forEach(function(imageBox) {
        var card = imageBox.closest('.card');

        if (videoWidth >= 1200) { 
            card.style.flexDirection = 'row';
            // Aumenta a altura da imageBox em 200px no if
            imageBox.style.height = '200px'; // Aumenta em 200px em relação ao tamanho padrão
            imageBox.style.width = '300px';

        }
        if (videoWidth <= 1200)  {
            card.style.flexDirection = 'column';
            // Aumenta a altura da imageBox em 400px no else
            imageBox.style.height = '400px'; // Aumenta em 400px em relação ao tamanho padrão
            imageBox.style.width = '450px';
        }
        if (videoWidth <= 600) { 
            card.style.flexDirection = 'column';
            // Aumenta a altura da imageBox em 200px no if
            imageBox.style.height = '200px'; // Aumenta em 200px em relação ao tamanho padrão
            imageBox.style.width = '300px';

        }
    });
}

// Adicionar um ouvinte de evento para verificar a largura quando a página for carregada ou redimensionada
window.addEventListener('load', ajustarLayout);
window.addEventListener('resize', ajustarLayout);


