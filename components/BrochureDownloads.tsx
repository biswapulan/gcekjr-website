import Link from 'next/link'

const brochures = [
  {
    title: 'Placement Brochure',
    subtitle: '2024–25 · Top recruiters, packages & stats',
    icon: '📊',
    color: '#1a3a6b',
    href: '#',
    size: 'PDF · 4.2 MB',
  },
  {
    title: 'Annual Magazine',
    subtitle: 'Ekalavya 2024 · Student achievements & events',
    icon: '📰',
    color: '#b5261e',
    href: '#',
    size: 'PDF · 12.8 MB',
  },
  {
    title: 'College Prospectus',
    subtitle: '2026–27 · Admissions, programmes & facilities',
    icon: '🎓',
    color: '#1a3a6b',
    href: '#',
    size: 'PDF · 6.1 MB',
  },
  {
    title: 'NIRF Report',
    subtitle: '2024 · Rankings & institutional data',
    icon: '📋',
    color: '#0f5c2e',
    href: '/nirf',
    size: 'PDF · 1.8 MB',
  },
  {
    title: 'College Forms',
    subtitle: 'All official forms & documents',
    icon: '📝',
    color: '#6b3a1a',
    href: 'https://drive.google.com/drive/folders/placeholder',
    size: 'Google Drive',
    external: true,
  },
]

export default function BrochureDownloads() {
  return (
    <section className="brochure-section">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div className="section-heading" style={{ margin: 0 }}>
          <h2>Downloads &amp; Publications</h2>
          <div className="section-heading-line" />
        </div>
        <Link href="/downloads" style={{ fontSize: '12px', color: 'var(--blue-mid)', fontWeight: 600, whiteSpace: 'nowrap', marginLeft: '16px' }}>
          View All →
        </Link>
      </div>
      {/* Horizontal scroll wrapper — works on all screen sizes */}
      <div className="brochure-scroll-wrap">
        <div className="brochure-scroll-inner">
          {brochures.map((b, i) => (
            <a
              key={i}
              href={b.href}
              className="brochure-card"
              target={(b as any).external ? '_blank' : undefined}
              rel={(b as any).external ? 'noopener noreferrer' : undefined}
              download={!(b as any).external && b.href !== '#' ? true : undefined}
            >
              <div className="brochure-icon-wrap" style={{ background: b.color }}>
                <span style={{ fontSize: '26px' }}>{b.icon}</span>
              </div>
              <div className="brochure-body">
                <div className="brochure-title">{b.title}</div>
                <div className="brochure-sub">{b.subtitle}</div>
                <div className="brochure-size">{b.size}</div>
              </div>
              <div className="brochure-dl" style={{ color: b.color }}>
                {(b as any).external ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Open Drive
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                    </svg>
                    Download
                  </>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
