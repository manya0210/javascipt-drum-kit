function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



// Click and touch function

keys.forEach(key => key.addEventListener("click", function(e){
    let value = key.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${value}"]`);
    const key_data = document.querySelector(`div[data-key="${value}"]`);
    if(audio){
        key_data.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
    }
})
);