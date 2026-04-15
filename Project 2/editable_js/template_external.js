
/**
 * EXTERNAL LIBRARY VIEW
 * Pick an external library and pipe your data to it.
 */
  // Requirements:
  // - Show data using an external library, such as leaflet.js or chartsjs or similar.
  // - Make a filter on this page so your external library only shows useful data.

let myMap = null;

function showExternal(data) {

setTimeout(() => {
  const mapElement = document.getElementById("restaurant-map");
    if (!mapElement) return;
  
    myMap = L.map('restaurant-map').setView([38.9897, -76.9378], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
     }).addTo(myMap);

    data.forEach((item) => {
      const coords = item.geometry?.coordinates;
      const props = item.properties || {};

      if (coords && coords.length === 2) {
        const lng = coords[0];
        const lat = coords[1];

        if (lat != null && lng != null) {
          L.marker([lat, lng])
            .addTo(myMap)
            .bindPopup(`
              <strong>${props.name || "N/A"}</strong><br>
              ${props.address_line_1 || "N/A"}<br>
              ${props.city || "N/A"}<br>
              ${props.state || "N/A"}<br>
              ${props.zip || "N/A"}
            `);
        }
      }
    });
  }, 0);

    
return `
    <h2 class="view-title">Library View</h2>
    <div id="restaurant-map"></div>
  `;
}
               
export default showExternal;