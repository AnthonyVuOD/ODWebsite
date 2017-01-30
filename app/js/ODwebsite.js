function initMap() {
  var stPete = {lat: 27.773056, lng: -82.639999};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: stPete,
    scrollwheel:false
  });
  var marker = new google.maps.Marker({
    position: stPete,
    map:map
  });
}
