import { NextRequest, NextResponse } from 'next/server'
import { getSheetData, appendRow, deleteRow } from '@/lib/sheets'
import { auth } from '@/lib/auth'

export async function GET() {
  try { return NextResponse.json(await getSheetData('Downloads')) }
  catch (err) { console.error('[GET /api/downloads]', err); return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 }) }
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const body = await req.json()
    await appendRow('Downloads', [body.title, body.description, body.driveUrl, body.category, body.fileSize])
    return NextResponse.json({ ok: true })
  } catch (err) { console.error('[POST /api/downloads]', err); return NextResponse.json({ error: 'Failed to add' }, { status: 500 }) }
}

export async function DELETE(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { rowIndex } = await req.json()
    await deleteRow('Downloads', rowIndex)
    return NextResponse.json({ ok: true })
  } catch (err) { console.error('[DELETE /api/downloads]', err); return NextResponse.json({ error: 'Failed to delete' }, { status: 500 }) }
}