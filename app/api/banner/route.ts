import { NextRequest, NextResponse } from 'next/server'
import { getSheetData, updateRow, appendRow } from '@/lib/sheets'
import { auth } from '@/lib/auth'

export async function GET() {
  try {
    const rows = await getSheetData('Banner')
    if (!rows || rows.length === 0) return NextResponse.json({ ImageUrl: '', Active: 'FALSE' })
    return NextResponse.json(rows[0])
  } catch (err) {
    console.error('[GET /api/banner]', err)
    return NextResponse.json({ ImageUrl: '', Active: 'FALSE' })
  }
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { imageUrl, active } = await req.json()
    const rows = await getSheetData('Banner')
    const activeStr = active ? 'TRUE' : 'FALSE'
    if (rows && rows.length > 0) {
      await updateRow('Banner', 0, [imageUrl, activeStr])
    } else {
      await appendRow('Banner', [imageUrl, activeStr])
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[POST /api/banner]', err)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}
