
/**
 * TABLE VIEW
 * Display data in sortable rows - good for scanning specific information
 */
  // Requirements:
  // - Show data in a table format
  // - Include all important fields
  // - Make it easy to scan and compare
  // - Consider adding sorting functionality
  //   https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/

function showTable(data) {

const rows = data
.map((item) => {
const props = item.properties || {};
    

return`
  <tr>
    <td>${props.name || "N/A"}</td>
    <td>${props.owner || "N/A"}</td>
    <td>${props.address_line_1 || "N/A"}</td>
    <td>${props.city || "N/A"}</td>
    <td>${props.inspection_date ? new Date(props.inspection_date).toLocaleDateString() : "N/A"}</td>
    <td>${props.inspection_results || "N/A"}</td>
  </tr>
  `;
  })
 .join("");
    
 return`
  <h2 class="view-title">Table View</h2>
  <div style="overflow-x: auto;">
    <table class="restaurant-table">
        <thead>
         <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Address</th>
            <th>City</th>
            <th>Inspection Date</th>
            <th>Inspection Result</th>
         </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
    </table>
 </div>
`;
}

export default showTable;