import { NextRequest, NextResponse } from 'next/server'
import { getSheetData, appendRow, deleteRow } from '@/lib/sheets'
import { auth } from '@/lib/auth'

export async function GET() {
  try {
    const data = await getSheetData('Notices')
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const body = await req.json()
    await appendRow('Notices', [body.date, body.title, body.category, body.pdfUrl, body.isNew ? 'true' : 'false'])
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[POST /api/notices]', err)
    return NextResponse.json({ error: 'Failed to add notice' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { rowIndex } = await req.json()
    await deleteRow('Notices', rowIndex)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[DELETE /api/notices]', err)
    return NextResponse.json({ error: 'Failed to delete notice' }, { status: 500 })
  }
}