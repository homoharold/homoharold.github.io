document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('bgAudio').play();
    document.removeEventListener('click', musicPlay);
}