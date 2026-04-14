/**
 * STATS VIEW
 * Show aggregate statistics and insights - good for understanding the big picture
 */
  // Requirements:
  // Replace the below "task" description with the following:
  // - One meaningful statistic calculation from the supplied dataset
  // ===- percent of restaurants not passing hand-washing, for example
  // - Present insights visually
  // - Show distributions, averages, counts, etc.
  // - Help users understand patterns in the data
  
  /* Javascript calculations here */   
  
function showStats(data) {

const total = data.length;

  const CompliantCount = data.filter((item) =>
    (item.properties?.inspection_results || "").includes("Compliant")
  ).length;

  const nonCompliantCount = data.filter((item) =>
    (item.properties?.inspection_results || "").includes("Non-Compliant")
  ).length;

  const criticalCount = data.filter((item) =>
    (item.properties?.inspection_results || "").includes("Critical")
  ).length;

  const reopenedCount = data.filter((item) =>
    (item.properties?.inspection_results || "").includes("Reopened")
  ).length;

  const closedCount = data.filter((item) =>
    (item.properties?.inspection_results || "").includes("Closed")
  ).length;


return `
    <h2 class="view-title">Stats View</h2>
  
    <div class="stats-grid">
    
      <div class="stat-card">
        <div class="stat-number">${CompliantCount}</div>
        <div class="stat-label">Compliant Cases</div>
      </div>

      <div class="stat-card">
        <div class="stat-number">${nonCompliantCount}</div>
        <div class="stat-label">Non-Compliant Violations</div>
      </div>

     <div class="stat-card">
        <div class="stat-number">${criticalCount}</div>
        <div class="stat-label">Critical Violations</div>
     </div>

     <div class="stat-card">
        <div class="stat-number">${reopenedCount}</div>
        <div class="stat-label">Facilities Reopened</div>
      </div>

     <div class="stat-card">
        <div class="stat-number">${closedCount}</div>
        <div class="stat-label">Facilities Closed</div>
      </div>
  `;
}

export default showStats