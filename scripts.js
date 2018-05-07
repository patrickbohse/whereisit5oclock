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
    var randPlace = timezones[timezone][Math.floor(Math.random() * timezones[timezone].length)];
    //year + "-" + month + "-" + date + " " + dispDour + ":" + minutes + ":" + seconds+"\tCurrent time zone where its 5pm: " + timezone
    $('#time').text(randPlace)
});

// jQuery('#vmap').vectorMap(
// {
//     map: 'world_en',
//     backgroundColor: '#a5bfdd',
//     borderColor: '#818181',
//     borderOpacity: 0.25,
//     borderWidth: 1,
//     color: '#f4f3f0',
//     enableZoom: true,
//     hoverColor: '#c9dfaf',
//     hoverOpacity: null,
//     normalizeFunction: 'linear',
//     scaleColors: ['#b6d6ff', '#005ace'],
//     selectedColor: '#c9dfaf',
//     selectedRegions: null,
//     showTooltip: true,
//     onRegionClick: function(element, code, region)
//     {
//         var message = 'You clicked "'
//             + region
//             + '" which has the code: '
//             + code.toUpperCase();

//         alert(message);
//     }
// });