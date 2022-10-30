// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let image;
  const selectImage = document.getElementById("horn-select");
  selectImage.addEventListener('change', (event) => {
    const img = document.querySelector('img[alt="No image selected"]');
    let imglink = "assets/images/" + event.target.value + ".svg";
    image = event.target.value;
    img.src = imglink;

    const audio = document.querySelector('.hidden');
    let soundlink =  "assets/audio/" + event.target.value + ".mp3";
    audio.src = soundlink;
  });

  const audioChange = document.getElementById("volume");
  audioChange.addEventListener('change', (event) => {
    let audioValue = event.target.value;
    const audioPicture = document.querySelector('img[alt="Volume level 2"]');
    if(audioValue == 0) {
      audioPicture.src = "assets/icons/volume-level-0.svg";
    }
    else if(audioValue >= 1 && audioValue < 33) {
      audioPicture.src = "assets/icons/volume-level-1.svg";
    }
    else if(audioValue >= 33 && audioValue < 67) {
      audioPicture.src = "assets/icons/volume-level-2.svg";
    }
    else if(audioValue >= 67) {
      audioPicture.src = "assets/icons/volume-level-3.svg";
    }
  });

  const button = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  button.addEventListener('click', (event) => {
    const audio = document.querySelector('.hidden');
    const audioChange = document.getElementById("volume");
    const img = document.querySelector('img[alt="No image selected"]');
    audio.volume = (audioChange.value/100);
    if(image == "party-horn") {
      audio.play();
      jsConfetti.addConfetti();
    }
    else {
      audio.play();
    }
  });
  
}