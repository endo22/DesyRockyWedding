// Google Apps Script untuk RSVP (Konfirmasi Kehadiran)
// Deploy sebagai Web App dengan akses "Anyone"

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RSVP');
    
    if (!sheet) {
      // Create sheet if doesn't exist
      const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('RSVP');
      newSheet.appendRow(['ID', 'Name', 'Attendance', 'Event', 'Guests', 'Message', 'Timestamp']);
    }
    
    const data = JSON.parse(e.postData.contents);
    const id = new Date().getTime().toString();
    
    sheet.appendRow([
      id,
      data.name,
      data.attendance,
      data.event || '-',
      data.guests || '-',
      data.message || '-',
      data.timestamp || new Date().toISOString()
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'RSVP submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RSVP');
  
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({
      error: 'Sheet not found'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  const data = sheet.getDataRange().getValues();
  const rsvps = [];
  
  // Skip header row (index 0)
  for (let i = 1; i < data.length; i++) {
    if (data[i][0]) { // Check if row has data
      rsvps.push({
        id: data[i][0],
        name: data[i][1],
        attendance: data[i][2],
        event: data[i][3],
        guests: data[i][4],
        message: data[i][5],
        timestamp: data[i][6]
      });
    }
  }
  
  // Sort by timestamp descending (newest first)
  rsvps.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
  return ContentService.createTextOutput(JSON.stringify({
    rsvps: rsvps
  })).setMimeType(ContentService.MimeType.JSON);
}
