console.log("Hello from back 2 School");

// TODO
// 1. Create a URl variable for storing the dashboard
// 2. Grab the container from HTML
// 3. Set some dashboard actions

const url =
  "https://public.tableau.com/views/BankingCustomerInteractionDashboard/DeepDiveDashboard";
const vizContainer = document.getElementById("vizContainer");
const vizOptions = {
  device: "desktop",
};
let viz;
// 1. grab a button from html
const pdfButton = document.getElementById("exportPDF");

function initViz() {
  console.log("Hello from initViz");
  viz = new tableau.Viz(vizContainer, url, vizOptions);
}
// 2. create a function to generate PDF
function exportPDF() {
  console.log("Generating a PDF...");
  viz.showExportPDFDialog();
}

// wait till content has loaded and execute initViz
document.addEventListener("DOMContentLoaded", initViz);
pdfButton.addEventListener("click", exportPDF);
