const sounds = ['MM Proficiency', 'Officer Jewels', 'Display Bible', 'Background 1','Hail the WM','Flag Hymn','Goodbye']

const buttonsContainer = document.getElementById('buttons');

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.id = sound;
    let isPlaying = false;
    btn.addEventListener('click', () => {
        if(!isPlaying){
            stopSongs();
            document.getElementById(sound).play();
            isPlaying = true;
        }else{
            fadeOut(sound);
            isPlaying = false;
        }
    });
    buttonsContainer.appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}

function fadeOut(id){
    const song = document.getElementById(id);
    let vol = song.volume;
    const interval = setInterval(()=>{
    if(vol > 0){
        vol -=0.1;
        song.volume = vol;
    }else{
        clearInterval(interval);
        song.pause();
        song.currentTime = 0;
        song.volume = 1;
    }
    }, 100);
}
