
import Player from '@vimeo/player';
import { throttle } from 'lodash';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});
player.on('timeupdate',throttle(() => {player.getCurrentTime().then(seconds => {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(error => {
        console.log(error);
      });
    }, 1000)
    );
const time = localStorage.getItem('videoplayer-current-time');
if (time) {
  player.setCurrentTime(time);
}

