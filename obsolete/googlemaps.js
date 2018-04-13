var map;
function initMap(APIKey) {
    var script=document.createElement('script')
    script.src="https://maps.googleapis.com/maps/api/js?key="+APIKey//+"&callback=initMap"
    script.defer=true
    script.async=true
    console.log(script.src)
    document.getElementsByTagName('head')[0].appendChild(script);

    console.log('api key script generated')

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(2.8,-187.3),
        mapTypeId: 'terrain'
    });

    // Create a <script> tag and set the USGS URL as the source.
    script = document.createElement('script');
    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
    for (var i = 0; i < results.features.length; i++) {
        var coords = results.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1],coords[0]);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }
}