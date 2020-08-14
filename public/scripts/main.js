function changeActiveMap(){
  const activeMap = document.querySelector('div.map[active = activated]');

  if(activeMap){
    activeMap.setAttribute('active', 'deactivated');
  }

  document.querySelector('div#day'+ this.texContent).setAttribute('active', 'activated');
}

function createNavButton(objConstruction){
  const {content, click, className, parent} = objConstruction;
  const navButton = document.createElement('div');

  navButton.texContent = content;
  navButton.onclick = click;
  navButton.setAttribute('class', className);

  parent.appendChild(navButton);

  return navButton;
}

function createMap(objConstruction){
  const {id, parent, position, gmaps, mapZoom, className} = objConstruction;
  const mapBox = document.createElement('div');
  const map = new gmaps.Map(mapBox, {zoom: mapZoom, center: position});

  mapBox.setAttribute('id', id);
  mapBox.setAttribute('class', className);
  mapBox.setAttribute('active', 'deactived');

  parent.appendChild(mapBox);

  return map;
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

  positions.forEach((elm, ind) => {

    const map = createMap({
      id: `day${ind + 1}`,
      className: 'map',
      parent: body,
      position: elm.position,
      mapZoom: 14,
      gmaps: google.maps
    }); // Map creation

    const navButton = createNavButton({
      content: ind + 1, 
      parent: navDays,
      className: 'nav_button',
      click: changeActiveMap
    }); // Map navigation button creation

    const marker = new google.maps.Marker({ 
      position: elm.position, 
      map: map, 
      title: elm.title, 
      label: elm.label
    }); // Map marker creation
  })
}

const thanks = '\033[0;35m[THANKS FROM CLIENT]\033[0;0m:\033[0;34m main.js was linked and working well..';

fetch('/post/thanks', { method: 'POST', body:thanks });