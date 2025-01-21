const GMAN = new Audio("/media/audio/gman/cleverly_done.wav");
const AUDIO_BUTTON = document.getElementById("cleverly-done");
var isPlaying = false;
var playTimer;

// Enable button here because if someone has javascript disabled the button won't do anything so it's useless to have it
document.getElementById("unfinished-button").style.display = "block";

function gman_onEndPlayback() {
    AUDIO_BUTTON.textContent = "🕨";
    GMAN.pause();
    GMAN.currentTime = 0;
    isPlaying = false;
    clearTimeout(playTimer);
}

function gman_onclick() {
    if (!isPlaying) {
        AUDIO_BUTTON.textContent = "🕪";
        GMAN.play();
        isPlaying = true;
        
        // HACK: For some reason the audio "onended" event doesn't work, and checking with hasOwnProperty returns false too, so we have to manually calculate the end
        playTimer = setTimeout(function(){ gman_onEndPlayback(); }, GMAN.duration * 1000);
    } else {
        gman_onEndPlayback();
    }
}