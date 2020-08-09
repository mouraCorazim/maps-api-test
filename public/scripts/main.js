function setMap(){
  const activeMap = document.querySelector('div.map[active = activated]');

  if(activeMap){
    activeMap.setAttribute('active', 'deactivated');
  }

  document.querySelector('div#day'+ this.texContent).setAttribute('active', 'activated');
}

function initMap() {
  const body = document.querySelector('body');
  const navDays = document.querySelector('nav#nav_days');

  const positions = [
    {
      title: 'São Paulo',
      label: 'São Paulo',
      position: {lat: -23.5475, lng: -46.63611},
    },
    {
      title: 'Salvador',
      label: 'Salvador',
      position: {lat: -12.97111, lng: -38.51083},
    },
    {
      title: 'Manaus',
      label: 'Manaus',
      position: {lat: -3.10194, lng: -60.025}
    },
  ]

  for(let i = 0; i != positions.length; i++){
    const mapBox = document.createElement('div');
    const navButton = document.createElement('div');
    const infowindow = new google.maps.InfoWindow();
    const map = new google.maps.Map(mapBox, {zoom: 16, center: positions[i].position});
    const marker = new google.maps.Marker(
      {
        position: positions[i].position, 
        map: map, 
        title: positions[i].title, 
        label: positions[i].label
      }
    );

    searchRestaurants(positions[i].position, '700', map, servicesMarkers);

    mapBox.setAttribute('id', `day${i + 1}`);
    mapBox.setAttribute('class', 'map');
    mapBox.setAttribute('active', 'deactived');

    navButton.texContent = i + 1;
    navButton.onclick = setMap;
    navButton.setAttribute('class', 'nav_button');

    navDays.appendChild(navButton);
    body.appendChild(mapBox);
  }
}

function searchRestaurants(location, radius, map, callback){

  var request = {
    location: location,
    radius: radius,
    type: ['restaurant']
  }
  const service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function servicesMarkers(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

const thanks = '\033[0;35m[THANKS FROM CLIENT]\033[0;0m:\033[0;34m main.js was linked and working well..';

fetch('/post/thanks', { method: 'POST', body:thanks });