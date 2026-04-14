/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories - good for understanding relationships and patterns
 */
  // Requirements:
  // - Group data by a meaningful category (cuisine, neighborhood, price, etc.)
  // - Show items within each group
  // - Make relationships between groups clear
  // - Consider showing group statistics

function showCategories(data) {

const groupedByCity = data.reduce((acc, item) => {
    const city = item.properties?.city || "Unknown";
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(item);
    return acc;
  }, {});

const sections = Object.entries(groupedByCity)
    .map(([city, restaurants]) => {
      const criticalCount = restaurants.filter((item) =>
        (item.properties?.address_line_1_results || "").includes
      ).length;

      const sampleItems = restaurants
        .map((item) => {
          const props = item.properties || {};
          return `
            <div class="category-item">
              <strong>${props.name || "N/A"}</strong><br>
              <span>${props.address_line_1 || "N/A"}</span>
            </div>
          `;
        })
        .join("");
  

  return `
        <section class="category-section">
          <h3 class="category-header">${city}</h3>
          <div class="category-items">
            <p><strong>Number of Restaurants:</strong> ${restaurants.length}</p>
            ${sampleItems}
          </div>
        </section>
      `;
    })
    .join("");

  return `
    <h2 class="view-title">Category View</h2>
    ${sections}
  `;
}
    
export default showCategories;