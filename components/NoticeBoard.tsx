import { getSheetData } from '@/lib/sheets'

interface Notice { Date: string; Title: string; Category: string; PdfUrl: string; IsNew: string }

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  'Exam':  { bg: '#fff3cd', color: '#7a5a00' },
  'New':   { bg: 'var(--red)', color: 'white' },
  'Event': { bg: '#d1e8ff', color: '#003d7a' },
}

function parseDate(d: string): { day: string; mon: string } {
  if (!d || d.trim() === '') return { day: '--', mon: '---' }
  let dt: Date | null = null
  const iso = Date.parse(d)
  if (!isNaN(iso)) {
    dt = new Date(iso)
  } else {
    const dmy = d.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/)
    if (dmy) dt = new Date(`${dmy[3]}-${dmy[2].padStart(2,'0')}-${dmy[1].padStart(2,'0')}`)
  }
  if (!dt || isNaN(dt.getTime())) return { day: d.slice(0, 2) || '--', mon: '---' }
  return {
    day: dt.getDate().toString().padStart(2, '0'),
    mon: dt.toLocaleString('en', { month: 'short' }).toUpperCase(),
  }
}

export default async function NoticeBoard({ limit = 6 }: { limit?: number }) {
  let notices: Notice[] = []
  try {
    const data = await getSheetData('Notices')
    notices = (data as unknown as Notice[]).slice(0, limit)
  } catch {
    // fail silently
  }

  return (
    <div className="notice-board">
      <div className="notice-board-header">
        <span className="notice-board-title">
          <span className="notice-board-dot" />
          Notices &amp; Announcements
        </span>
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.5px' }}>LATEST UPDATES</span>
      </div>
      <div className="notice-board-body">
        {notices.length === 0 && (
          <div className="notice-empty">No notices at this time.</div>
        )}
        {notices.map((n, i) => {
          const { day, mon } = parseDate(n.Date)
          const tag = n.IsNew === 'true' ? 'New' : n.Category
          const tagStyle = TAG_STYLES[tag] || null
          return (
            <div key={i} className="notice-row">
              <div className="notice-date-badge">
                <div className="notice-date-day">{day}</div>
                <div className="notice-date-mon">{mon}</div>
              </div>
              <div className="notice-body">
                {n.PdfUrl ? (
                  <a href={n.PdfUrl} target="_blank" rel="noopener noreferrer" className="notice-title">
                    {n.Title}
                    {tagStyle && (
                      <span className="notice-tag" style={tagStyle}>{tag}</span>
                    )}
                  </a>
                ) : (
                  <span className="notice-title">
                    {n.Title}
                    {tagStyle && (
                      <span className="notice-tag" style={tagStyle}>{tag}</span>
                    )}
                  </span>
                )}
                <span className="notice-cat">{n.Category}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
