import './css/main.scss';
// import 'animate.css';
import $ from "jquery";
window.jQuery = $;
window.$ = $;
let map;

$( document ).ready(function() {
  window.DG.then(function () {
    map = DG.map('map', {
      center: [42.872554,74.604565],
      zoom: 18.36
    });
    window.DG.marker([42.872554,74.604565]).addTo(map).bindPopup('ул. Токтогула 99');
  });
});