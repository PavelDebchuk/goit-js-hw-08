import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    // console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    // console.log('title:', title);
});

const onPlay = function(data) {
};

player.on('play', onPlay);


player.on('timeupdate', function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    _.throttle(() => {
        console.log("Scroll handler call every 1000ms");
      }, 1000)
});





// const throttlePause = _.throttle(player.on, 1000);
// console.log('100ms', throttlePause);
// window.addEventListener('play', throttlePause);

const currentTime = localStorage.getItem('videoplayer-current-time');

console.log(currentTime);



    




player.setCurrentTime(currentTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

