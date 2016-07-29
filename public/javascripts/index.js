var googleMap = require('google-maps');

var map

function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
}
var googleMapKey = process.env.Map_key

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARmlZdC56EQCWrGryoVKvQwhhiBsqm_tc&callback=initMap"
async defer></script>



GoogleMapsLoader.load(function(google) {
    new google.maps.Map(el, options);
});
