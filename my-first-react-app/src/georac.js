

var map = L.map('map', {
		
    //center: [4,-72],
    zoomControl: true,
    //crs: L.CRS.EPSG4326
}).setView([4,-72],5); 

var arc = new L.tileLayer( 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(map);
var osm = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.control.scale().addTo(map);

//var bases = zn_bases_m/;

var bases = L.geoJSON(bases).addTo(map);	
var fronteras = L.geoJSON(fronteras).addTo(map);

/*var wmsLayer = L.tileLayer.wms('http://localhost:8080/geoserver/georac13/wms?', {
    layers: 'Fronteras,Buffer_Aeropuertos'
    //transparent: true
}).addTo(map);*/

var mapasbase = {
    'Satelital': arc,
    'OSM': osm
};

var overlays = {
    'Bases Militares': bases,
    'Fronteras': fronteras
};

var layerControl = L.control.layers(mapasbase, overlays).addTo(map);
