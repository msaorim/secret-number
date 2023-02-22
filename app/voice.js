window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const mostraFala = document.getElementById('voceDisse');
    mostraFala.innerHTML = e.results[0][0].transcript
}