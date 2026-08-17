// ScaleBridge — shared form submission helper.
// Posts JSON to the Apps Script Web App. Google Apps Script web apps don't
// return CORS headers on simple deployments, so we POST in no-cors mode:
// the request still reaches the script and gets appended to the Sheet, we
// just can't read the response back. We treat "no network error" as success.
async function sbSubmitForm(sheetName, payload) {
  var url = (window.SCALEBRIDGE_CONFIG && window.SCALEBRIDGE_CONFIG.GAS_URL) || "";
  if (!url || url.indexOf("REPLACE_WITH") === 0) {
    throw new Error("NOT_CONFIGURED");
  }
  var body = Object.assign({ sheet: sheetName, submittedAt: new Date().toISOString() }, payload);
  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(body)
  });
  return true;
}

function sbFilesToBase64(fileList) {
  var files = Array.from(fileList || []);
  return Promise.all(files.map(function (file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        var result = reader.result || "";
        var base64 = String(result).split(",")[1] || "";
        resolve({ name: file.name, type: file.type, size: file.size, base64: base64 });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }));
}
