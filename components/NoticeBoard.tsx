import { getSheetData } from '@/lib/sheets'

interface Notice { Date: string; Title: string; Category: string; PdfUrl: string; IsNew: string }

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  'Exam':  { bg: '#fff3cd', color: '#7a5a00' },
  'New':   { bg: 'var(--red)', color: 'white' },
  'Event': { bg: '#d1e8ff', color: '#003d7a' },
}

function parseDate(d: string): { day: string; mon: string } {
  if (!d || d.trim() === '') return { day: '--', mon: '---' }
  // Try ISO format first (YYYY-MM-DD), then DD-MM-YYYY, then DD/MM/YYYY
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
    // fail silently — shows empty state
  }

  return (
    <div>
      {notices.length === 0 && (
        <div style={{ padding: '20px', color: 'var(--muted)', fontSize: '13px', textAlign: 'center' }}>
          No notices at this time.
        </div>
      )}
      {notices.map((n, i) => {
        const { day, mon } = parseDate(n.Date)
        const tag = n.IsNew === 'true' ? 'New' : n.Category
        const tagStyle = TAG_STYLES[tag] || null
        return (
          <div key={i} style={{ display:'flex', gap:'12px', padding:'11px 0', borderBottom: i < notices.length - 1 ? '1px dashed var(--border)' : 'none', alignItems:'flex-start' }}>
            <div style={{ background:'var(--blue)', color:'white', padding:'5px 8px', textAlign:'center', flexShrink:0, minWidth:'42px' }}>
              <div style={{ fontFamily:'Source Serif 4, serif', fontSize:'17px', fontWeight:600, lineHeight:1 }}>{day}</div>
              <div style={{ fontSize:'9px', textTransform:'uppercase', letterSpacing:'0.5px', opacity:0.8, marginTop:'2px' }}>{mon}</div>
            </div>
            <div>
              {n.PdfUrl ? (
                <a href={n.PdfUrl} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize:'12.5px', color:'var(--text)', lineHeight:1.5 }}>
                  {n.Title}
                </a>
              ) : (
                <span style={{ fontSize:'12.5px', color:'var(--text)', lineHeight:1.5 }}>{n.Title}</span>
              )}
              {tagStyle && (
                <span style={{ fontSize:'9px', fontWeight:600, letterSpacing:'0.5px', textTransform:'uppercase', padding:'2px 6px', borderRadius:'1px', marginLeft:'5px', ...tagStyle }}>
                  {tag}
                </span>
              )}
              <br/>
              <span style={{ fontSize:'11px', color:'var(--light-text)' }}>{n.Category}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
