import { NextRequest, NextResponse } from 'next/server'
import { getSheetData, appendRow, deleteRow } from '@/lib/sheets'
import { auth } from '@/lib/auth'

export async function GET() {
  try { return NextResponse.json(await getSheetData('Nirf')) }
  catch (err) { console.error('[GET /api/nirf]', err); return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 }) }
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const body = await req.json()
    await appendRow('Nirf', [body.year, body.title, body.driveUrl, body.type])
    return NextResponse.json({ ok: true })
  } catch (err) { console.error('[POST /api/nirf]', err); return NextResponse.json({ error: 'Failed to add' }, { status: 500 }) }
}

export async function DELETE(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { rowIndex } = await req.json()
    await deleteRow('Nirf', rowIndex)
    return NextResponse.json({ ok: true })
  } catch (err) { console.error('[DELETE /api/nirf]', err); return NextResponse.json({ error: 'Failed to delete' }, { status: 500 }) }
}