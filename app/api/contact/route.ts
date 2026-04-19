import { NextRequest, NextResponse } from 'next/server'
import { getSheetData, updateRow, appendRow } from '@/lib/sheets'
import { auth } from '@/lib/auth'

export async function GET() {
  try {
    const rows = await getSheetData('Contact')
    return NextResponse.json(rows[0] ?? {})
  } catch { return NextResponse.json({}, { status: 500 }) }
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const b = await req.json()
  const values = [b.phone, b.email, b.establishmentEmail, b.address, b.officeHours, b.collegeTimings, b.tpoEmail, b.tpoPhone]
  try {
    const existing = await getSheetData('Contact')
    if (existing.length > 0) await updateRow('Contact', 0, values)
    else await appendRow('Contact', values)
    return NextResponse.json({ ok: true })
  } catch { return NextResponse.json({ error: 'Failed to save' }, { status: 500 }) }
}
