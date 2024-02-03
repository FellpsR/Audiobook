const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;

function playPause() {
    if (audioCapitulo.paused) {
        audioCapitulo.play();
    }
    else {
        audioCapitulo.pause();
    }
}

botaoPlayPause.addEventListener('click', playPause);

//ou pode ser feito da forma do "onclick"
// botaoPlayPause.onclick(playPause);