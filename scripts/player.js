const player = document.querySelector('.player')
const player_state_button = player.querySelector('.player__state-button')
const video = player.querySelector('.player__video')
const volume_input = player.querySelector('.volume__input')
const screen_mode_toggle_button = player.querySelector('.player__screen-mode-toggle-button')
const current_time_input = document.querySelector('.player__current-time');
function init() {
    updateVolume();
}

video.toggle = function () {
    if (video.paused) video.play()
    else video.pause()
    player.classList.toggle('playing')
}


function updateVolume() {
    video.volume = volume_input.value / 100;
}


volume_input.oninput = updateVolume;
player_state_button.addEventListener('click', video.toggle)


video.addEventListener('click', video.toggle);

document.onkeyup = function (e) {
    if (e.code === 'Space') video.toggle()
}

screen_mode_toggle_button.onclick = function () {
    if (document.fullscreen) document.exitFullscreen()
    else player.requestFullscreen()
    player.classList.toggle('fullscreen')
}

function updateCurrentTime() {
    current_time_input.value = video.currentTime * 100 / video.duration
}

video.onended = function () {
    console.log('ended');
}


setInterval(updateCurrentTime, 1000 / 60);

init();
