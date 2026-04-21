/**
 * Converts any Google Drive share/view URL into a proxied image URL.
 * Routes through /api/image-proxy to avoid CORS/referrer blocks.
 */
export function getDriveImageUrl(url: string, size = 1000): string {
  if (!url) return ''

  // Already a proxy URL — just return it
  if (url.includes('/api/image-proxy')) return url

  // Extract file ID from any Drive URL format
  let fileId: string | null = null

  // Format: /file/d/{id}/view or /file/d/{id}
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (fileMatch) fileId = fileMatch[1]

  // Format: id={id}
  if (!fileId) {
    const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/)
    if (idMatch) fileId = idMatch[1]
  }

  // Format: /d/{id}/ (short links)
  if (!fileId) {
    const shortMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
    if (shortMatch) fileId = shortMatch[1]
  }

  if (fileId) {
    return `/api/image-proxy?id=${fileId}&sz=w${size}`
  }

  // Not a Drive URL — return as-is (local /public paths etc.)
  return url
}
