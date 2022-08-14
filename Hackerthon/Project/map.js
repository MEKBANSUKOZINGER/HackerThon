var map;
var button = document.getElementById('button');
button.addEventListener('click', changeCenter);

function initMap() {
  var seoul = { lat: 37.5642135 ,lng: 127.0016985 };
  map = new google.maps.Map( document.getElementById('map'), {
      zoom: 12,
      center: seoul
    });

  new google.maps.Marker({
    position: seoul,
    map: map,
    label: "서울 중심 좌표"
  });
}

function changeCenter(){
  var busan = { lat: 35.1379222, lng: 129.05562775 };
  map.panTo(busan);
  map.setZoom(14);
}

function changeCenter(){
    var busan = { lat: 35.1379222, lng: 129.05562775 };
    map = new google.maps.Map( document.getElementById('map'), {
        zoom: 14,
        center: busan
      });
  }