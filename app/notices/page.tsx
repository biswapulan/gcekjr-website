'use client'
import { useEffect, useState } from 'react'
import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const PAGE_SIZE = 20

interface Notice {
  Date: string
  Title: string
  Category: string
  PdfUrl: string
  IsNew: string
}

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

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch('/api/notices', { cache: 'no-store' })
      .then(res => res.json())
      .then((data: Notice[]) => {
        const sorted = [...data].sort((a, b) => {
          const da = new Date(a.Date).getTime()
          const db = new Date(b.Date).getTime()
          return (isNaN(db) ? 0 : db) - (isNaN(da) ? 0 : da)
        })
        setNotices(sorted)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const totalPages = Math.ceil(notices.length / PAGE_SIZE)
  const paginated = notices.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const goToPage = (p: number) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="page-wrap-sm">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '20px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px' }}>
            Notices &amp; Announcements
          </h1>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>

        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
            Loading notices...
          </div>
        ) : notices.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
            No notices at this time.
          </div>
        ) : (
          <>
            <div className="notice-board">
              <div className="notice-board-body">
                {paginated.map((n, i) => {
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
                            {tagStyle && <span className="notice-tag" style={tagStyle}>{tag}</span>}
                          </a>
                        ) : (
                          <span className="notice-title">
                            {n.Title}
                            {tagStyle && <span className="notice-tag" style={tagStyle}>{tag}</span>}
                          </span>
                        )}
                        <span className="notice-cat">{n.Category}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {totalPages > 1 && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '28px', paddingBottom: '8px' }}>
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  style={{
                    padding: '7px 20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.3px',
                    background: page === 1 ? 'var(--border)' : 'var(--blue)',
                    color: page === 1 ? 'var(--muted)' : 'white',
                    border: 'none', cursor: page === 1 ? 'not-allowed' : 'pointer', borderRadius: '2px'
                  }}
                >
                  ← Prev
                </button>
                <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 500 }}>
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  style={{
                    padding: '7px 20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.3px',
                    background: page === totalPages ? 'var(--border)' : 'var(--blue)',
                    color: page === totalPages ? 'var(--muted)' : 'white',
                    border: 'none', cursor: page === totalPages ? 'not-allowed' : 'pointer', borderRadius: '2px'
                  }}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}