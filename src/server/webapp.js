
// Function used by GAS to process a GET request
export function doGet (e) {
  return HtmlService.createHtmlOutputFromFile('demo-bootstrap')
    .setTitle('Base Project')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}