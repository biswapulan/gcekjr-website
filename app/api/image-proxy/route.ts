import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const sz = searchParams.get('sz') || 'w1000'

  if (!id) return new NextResponse('Missing id', { status: 400 })

  try {
    const driveUrl = `https://drive.google.com/thumbnail?id=${id}&sz=${sz}`
    const res = await fetch(driveUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://drive.google.com',
      },
    })

    if (!res.ok) return new NextResponse('Failed to fetch image', { status: res.status })

    const buffer = await res.arrayBuffer()
    const contentType = res.headers.get('content-type') || 'image/jpeg'

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (err) {
    console.error('[image-proxy]', err)
    return new NextResponse('Proxy error', { status: 500 })
  }
}
