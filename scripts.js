//TIMEZONE CODE
$('document').ready(function(){
    var time = new Date();
    var year = time.getUTCFullYear();
    var month = time.getUTCMonth()+1;
    var date = time.getUTCDate();
    var hour = time.getUTCHours();
    var dispHour = hour;
    if (hour < 10){
        dispHour = "0" + hour;
    }
    var minutes = time.getUTCMinutes();
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    var seconds = time.getUTCSeconds();
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    var timezone = 17 - hour;
    if (timezone >= 12){
        timezone = timezone - 24;
    }
    // gets a single place where it is 5pm
    var randPlace = timezones[timezone][Math.floor(Math.random() * timezones[timezone].length)];
    $('#time').text(randPlace)
});

// MAP CODE

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$('#map').vectorMap({
    map: 'world_mill',
    backgroundColor: '#FFFFFF',
    regionStyle: {
        initial: {
            fill: '#b1b1b1'
        }
    },
    zoomButtons : false,
});

sleep(200).then(() => {
    $('#map').vectorMap('get','mapObject').setFocus({
        region: 'AU',
        animate: true
    });
})

