// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
const synth = window.speechSynthesis;
let text = document.getElementById("text-to-speak");
let utterThis = new SpeechSynthesisUtterance(text.value);
synth.addEventListener('voiceschanged', () => {
  const addVoices = document.getElementById("voice-select")
  const voices = synth.getVoices();
  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.value = voices[i].name;
    addVoices.appendChild(option);
  }
});
const button = document.querySelector('button');
button.addEventListener('click', (event) => {
  const voices = synth.getVoices();
  const voiceInput = document.getElementById("voice-select");
  text = document.getElementById("text-to-speak");
  utterThis = new SpeechSynthesisUtterance(text.value);
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === voiceInput.value) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  utterThis.addEventListener('start', (event) => {
    const img = document.querySelector('img[alt="Smiling face"]');
    img.src = "assets/images/smiling-open.png"
  });
  
  utterThis.addEventListener('end', (event) => {
    const img = document.querySelector('img[alt="Smiling face"]');
    img.src = "assets/images/smiling.png"
  });  
});

}