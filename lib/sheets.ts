import { google } from 'googleapis'
import { sheets_v4 } from 'googleapis'

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID!

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive.readonly',
    ],
  })
}

async function _getSheetData(sheetName: string): Promise<Record<string, string>[]> {
  const auth = getAuth()
  const sheets = google.sheets({ version: 'v4', auth })
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: sheetName + '!A:Z',
  })
  const rows = res.data.values || []
  if (rows.length < 2) return []
  const headers = rows[0] as string[]
  return rows.slice(1).map((row: string[]) =>
    Object.fromEntries(headers.map((h: string, i: number) => [h, row[i] ?? '']))
  )
}

export function getSheetData(sheetName: string): Promise<Record<string, string>[]> {
  return _getSheetData(sheetName)
}

export async function appendRow(sheetName: string, values: string[]): Promise<void> {
  const auth = getAuth()
  const sheets = google.sheets({ version: 'v4', auth })
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: sheetName + '!A:Z',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [values] },
  })
}

/**
 * Delete a data row by its 0-based index in the data array (excluding the header row).
 * dataIndex=0 → deletes sheet row 2 (first data row after header).
 */
export async function deleteRow(sheetName: string, dataIndex: number): Promise<void> {
  const auth = getAuth()
  const sheets = google.sheets({ version: 'v4', auth })
  const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID })
  const sheet = meta.data.sheets?.find(
    (s: sheets_v4.Schema$Sheet) => s.properties?.title === sheetName
  )
  const sheetId = sheet?.properties?.sheetId
  // +1 to skip the header row (row index 0 in Sheets API = row 1 in spreadsheet)
  const startIndex = dataIndex + 1
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: {
      requests: [{
        deleteDimension: {
          range: { sheetId, dimension: 'ROWS', startIndex, endIndex: startIndex + 1 }
        }
      }]
    }
  })
}

export async function updateRow(sheetName: string, dataIndex: number, values: string[]): Promise<void> {
  const auth = getAuth()
  const sheets = google.sheets({ version: 'v4', auth })
  // +2: +1 for header row, +1 because Sheets rows are 1-indexed
  const range = sheetName + '!A' + (dataIndex + 2)
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [values] },
  })
}