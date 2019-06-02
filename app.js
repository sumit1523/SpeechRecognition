const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const reecognition = new SpeechRecognition();

reecognition.onstart = function () {
    console.log('voice is activated !!');
};

reecognition.onresult = function (event) {
    // console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

// add  the listner to the btn

btn.addEventListener('click', () => {
    reecognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    // Random color generators

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    (function setRandomColor() {
        $(".content").css("color", getRandomColor());
    }
    )();

    window.speechSynthesis.speak(speech);
}
