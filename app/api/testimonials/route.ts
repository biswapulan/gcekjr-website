import { NextRequest, NextResponse } from 'next/server'
import { getSheetData, appendRow, deleteRow } from '@/lib/sheets'
import { auth } from '@/lib/auth'

export async function GET() {
  try { return NextResponse.json(await getSheetData('Testimonials')) }
  catch (err) { console.error('[GET /api/testimonials]', err); return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 }) }
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const body = await req.json()
    await appendRow('Testimonials', [body.quote, body.name, body.designation, body.company])
    return NextResponse.json({ ok: true })
  } catch (err) { console.error('[POST /api/testimonials]', err); return NextResponse.json({ error: 'Failed to add' }, { status: 500 }) }
}

export async function DELETE(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { rowIndex } = await req.json()
    await deleteRow('Testimonials', rowIndex)
    return NextResponse.json({ ok: true })
  } catch (err) { console.error('[DELETE /api/testimonials]', err); return NextResponse.json({ error: 'Failed to delete' }, { status: 500 }) }
}