
/**
 * EXTERNAL LIBRARY VIEW
 * Pick an external library and pipe your data to it.
 */
  // Requirements:
  // - Show data using an external library, such as leaflet.js or chartsjs or similar.
  // - Make a filter on this page so your external library only shows useful data.

function showTable(data) {

setTimeout(() => {
  const mapElement = document.getElementById("map");
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
            .addTo(map)
            .bindPopup(`
              <strong>${props.name || "N/A"}</strong><br>
              ${props.city || "N/A"}<br>
              ${props.inspection_results || "N/A"}
            `);
        }
      }
    });
  }, 0);

    
    
return `
    <h2 class="view-title">Library View</h2>
  `;
}
               
  
export default showTable;