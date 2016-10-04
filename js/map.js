console.log("start");

var mymap;

window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1kXY2UDygn1MSW3lgJwJkK62hJgaSXHGAkvti1zKnV8o/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: build,
                     simpleSheet: true } );
  }



  function build(data){
    // console.log("sucessfully processed");
    // console.log(data[0]);
    lats = [];
    longs = [];
    for (i in data){
      // console.log(data[i].lat);
    }
    var mapData = data;
    buildMap(mapData);

  }



    function buildMap(mapData) {

      mymap = L.map('mapid').setView([35.222178, -80.841289], 14);
      //THE ZOOM IS SET UP HERE DUMMY

      var places = mapData;
      var markers = [];

      L.tileLayer('https://api.mapbox.com/styles/v1/lindsaycarbonell/citeusxid006x2ip17zp0ed55/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGluZHNheWNhcmJvbmVsbCIsImEiOiJjaXRlajNhd2cwNjBkMzJvOW04OWQ0dm5xIn0.GGAg70cv_JpPUXxFvkdY-w').addTo(mymap);

      mymap.scrollWheelZoom.disable();


      for (var x in places){

        var thisIcon = L.icon({
          iconUrl: 'assets/' + places[x].icon,
          iconSize:     [38, 38], // size of the icon
          iconAnchor:   [22, 38], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -45] // point from which the popup should open relative to the iconAnchor

        });


        var thisMarker = L.marker([places[x].lat, places[x].long], {icon: thisIcon})
            .bindPopup("<h2>" + places[x].short_name + "</h2><p>" + places[x].description + "</p>" )
            .openPopup();

        console.log(thisMarker);
        markers.push(thisMarker);
        console.log("markers: " + markers);
        markers[x].addTo(mymap);
      }
    }
