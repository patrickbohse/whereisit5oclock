//TIMEZONE CODE
$('document').ready(function(){
    var time = new Date();
    var hour = time.getUTCHours();
    var timezone = 17 - hour;
    if (timezone >= 12){
        timezone = timezone - 24;
    }

    // gets a single place where it is 5pm and set main text
    var randPlaceArr = timezones[timezone][Math.floor(Math.random() * timezones[timezone].length)].split(';');
    var randPlaceName = randPlaceArr[0];
    var randPlaceCode = randPlaceArr[1];
    var displayTxt = "It is 5 PM in " + randPlaceName + " right now.";
    startTypeWriter(displayTxt);
    
    // zoom map to rand place
    var randPlaceInfo = jvmCountries[randPlaceCode];
    //get lat then lng
    var lat = randPlaceInfo["coords"][0];
    var lng = randPlaceInfo["coords"][1];
    // Wait some time for smooth animations
    sleep(200).then(() => {
        // get map object
        mapObj = $('#map').vectorMap('get','mapObject')
        // do things to the map object
        mapObj.setFocus({
            lat: lat,
            lng: lng,
            animate: true,
            scale: 2.25
        });

        //figure out if we need to highlight a region or marker
        if(isNaN(randPlaceCode)){
            mapObj.setSelectedRegions(randPlaceCode);
        }else{
            mapObj.setSelectedMarkers(randPlaceCode);
        }

        
    });

});

// SETUP MAP
$('#map').vectorMap({
    map: 'world_mill',
    backgroundColor: '#FFFFFF',
    regionStyle: {
        initial: {
            fill: '#b1b1b1'
        },
        selected:
        {
            fill: '#CD3333'
        }
    },
    markerStyle: {
        initial: {
            fill: '#b1b1b1',
            stroke: 'transparent',
            r: 4
        },
        hover: {
            "stroke-width": 0
        },
        selected:
        {
            fill: '#CD3333'
        }
      },
      // countries that don't exist on the map
      markers: [
        {latLng: [16, -23], name: 'Cabo Verde'},
        {latLng: [-14.2, -170.1], name: 'American Samoa'},
        {latLng: [-23.4, -134.5], name: 'Gambier Islands'},
        {latLng: [13.4, 144.8], name: 'Guam'},
        {latLng: [-13.7, -172], name: 'Samoa'},
        {latLng: [-21.2, -175.1], name: 'Tonga'},
        {latLng: [-7.1, 177.6], name: 'Tuvalu'}
      ],
    zoomButtons : false,
});

//HELPER FUNCTIONS

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startTypeWriter(txt){
    var i = 0;
    var speed = 75; /* The speed/duration of the effect in milliseconds */
    typeWriter();
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("timetxt").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
}

