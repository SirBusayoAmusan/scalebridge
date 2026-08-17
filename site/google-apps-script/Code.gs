/**
 * ScaleBridge — form-to-Google-Sheet backend.
 *
 * SETUP
 * 1. Create (or open) a Google Sheet to act as the database.
 * 2. Extensions > Apps Script. Delete any starter code and paste this file in.
 * 3. Run `setupSheets` once from the Apps Script editor (Run > setupSheets)
 *    to create the three tabs with headers. Approve the permission prompts.
 * 4. Deploy > New deployment > type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 5. Copy the deployment's /exec URL and paste it into js/config.js as GAS_URL.
 * 6. Re-deploy (Deploy > Manage deployments > edit > new version) any time
 *    you change this file — editing the script alone does not update a
 *    live deployment.
 *
 * Optional: set DRIVE_FOLDER_ID below to a Drive folder ID to save
 * "Submit an Opportunity" file attachments there. Leave blank to skip
 * file storage (attachments will simply be ignored).
 */

var DRIVE_FOLDER_ID = ""; // e.g. "1AbCdEfGhIjKlMnOpQrStUvWxYz"

var SHEET_CONFIG = {
  Opportunities: [
    "Submitted At", "Financing Type", "Amount Requested", "Repayment Source",
    "Counterparty", "Transaction Stage", "Contact Name", "Organisation",
    "Email", "Phone", "Attachments"
  ],
  CapitalPartners: [
    "Submitted At", "Institution Type", "Ticket Size", "Sectors of Interest",
    "Institution Name", "Contact Name", "Email", "Phone"
  ],
  Contact: [
    "Submitted At", "Full Name", "Organisation", "Email", "Message"
  ]
};

function setupSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(SHEET_CONFIG).forEach(function (name) {
    var sheet = ss.getSheetByName(name);
    if (!sheet) sheet = ss.insertSheet(name);
    sheet.getRange(1, 1, 1, SHEET_CONFIG[name].length).setValues([SHEET_CONFIG[name]]);
    sheet.setFrozenRows(1);
  });
  var def = ss.getSheetByName("Sheet1");
  if (def && ss.getSheets().length > 1) ss.deleteSheet(def);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheetName = data.sheet;
    if (!SHEET_CONFIG[sheetName]) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "Unknown sheet: " + sheetName }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    var submittedAt = data.submittedAt || new Date().toISOString();

    var row;
    if (sheetName === "Opportunities") {
      var attachmentLinks = saveAttachments(data.attachments, data.contactName || "opportunity");
      row = [
        submittedAt, data.financingType || "", data.amount || "", data.repayment || "",
        data.counterparty || "", data.stage || "", data.contactName || "",
        data.contactOrg || "", data.contactEmail || "", data.contactPhone || "",
        attachmentLinks.join(", ")
      ];
    } else if (sheetName === "CapitalPartners") {
      row = [
        submittedAt, data.institutionType || "", data.ticketSize || "", data.sectors || "",
        data.institutionName || "", data.contactName || "", data.email || "", data.phone || ""
      ];
    } else if (sheetName === "Contact") {
      row = [submittedAt, data.fullName || "", data.organisation || "", data.email || "", data.message || ""];
    }

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function saveAttachments(attachments, label) {
  var links = [];
  if (!attachments || !attachments.length || !DRIVE_FOLDER_ID) return links;
  var folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  attachments.forEach(function (att) {
    try {
      var bytes = Utilities.base64Decode(att.base64);
      var blob = Utilities.newBlob(bytes, att.type || "application/octet-stream", label + " - " + att.name);
      var file = folder.createFile(blob);
      links.push(file.getUrl());
    } catch (err) {
      links.push("(failed to save " + att.name + ")");
    }
  });
  return links;
}

// Simple health check — visiting the /exec URL directly in a browser (GET)
// should show this, confirming the deployment is live.
function doGet(e) {
  return ContentService.createTextOutput("ScaleBridge form backend is running.");
}
