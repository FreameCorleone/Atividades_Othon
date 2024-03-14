function ajustarLayout() {
    var videoWidth = document.querySelector('#video').offsetWidth;
    var imageBoxes = document.querySelectorAll('.card .image-box');
    var name = document.querySelector('.name-job');

    imageBoxes.forEach(function(imageBox) {
        var card = imageBox.closest('.card');

        if (videoWidth >= 1200) { 
            card.style.flexDirection = 'row';
            imageBox.style.height = '200px';
            imageBox.style.width = '300px';
        }
        if (videoWidth <= 1200)  {
            card.style.flexDirection = 'column';
            imageBox.style.height = '400px';
            imageBox.style.width = '450px';
        }
        if (videoWidth <= 600) { 
            card.style.flexDirection = 'column';
            imageBox.style.height = '200px';
            imageBox.style.width = '300px';
        }
    });
}

window.addEventListener('load', ajustarLayout);
window.addEventListener('resize', ajustarLayout);