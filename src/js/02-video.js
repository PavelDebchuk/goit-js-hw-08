
//  Инициализируй плеер в файле скрипта как это описано в секции pre-existing player,
//  но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    // console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    // console.log('title:', title);
});


// Разбери документацию метода on() и начни отслеживать
//  событие timeupdate - обновление времени воспроизведения.
const onPlay = function(data) {
};

player.on('play', onPlay);



let playTime;

player.on('timeupdate', function(data) {
    playTime = data.seconds;
    console.log(playTime);
    return;
});


// При перезагрузке страницы воспользуйся методом setCurrentTime()
// для того чтобы возобновить воспроизведение с сохраненной позиции.

player.setCurrentTime(playTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
