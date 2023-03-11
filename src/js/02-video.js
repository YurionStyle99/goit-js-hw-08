import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const saveTimeToLocalStorage = throttle((time) => {
  localStorage.setItem('videoplayer-current-time', time);
}, 1000);

player.on('timeupdate', ({ seconds }) => {
  saveTimeToLocalStorage(seconds);
});

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}

