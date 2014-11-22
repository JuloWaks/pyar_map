var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(map);
var memberIcon = L.divIcon({className: 'member', iconSize: [60, 60], iconAnchor: [30, 30]});

var marker = L.marker([51.5, -0.09],  {icon: memberIcon}).addTo(map);
var marker = L.marker([51.4, -0.08],  {icon: memberIcon}).addTo(map);
var marker = L.marker([51.2, -0.07],  {icon: memberIcon}).addTo(map);
var marker = L.marker([51.3, -0.06],  {icon: memberIcon}).addTo(map);
