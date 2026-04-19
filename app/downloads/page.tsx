import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'

const downloads = [
  {
    title: 'Placement Brochure',
    subtitle: '2024–25 · Top recruiters, packages & stats',
    description: 'Comprehensive placement data including company-wise statistics, salary packages, and student achievements for the academic year 2024–25.',
    icon: '📊',
    color: '#1a3a6b',
    href: '#',
    size: 'PDF · 4.2 MB',
    category: 'Placement',
  },
  {
    title: 'Annual Magazine',
    subtitle: 'Ekalavya 2024 · Student achievements & events',
    description: 'The annual college magazine featuring student articles, event highlights, faculty contributions, and the year\'s most memorable moments.',
    icon: '📰',
    color: '#b5261e',
    href: '#',
    size: 'PDF · 12.8 MB',
    category: 'Publication',
  },
  {
    title: 'College Prospectus',
    subtitle: '2026–27 · Admissions, programmes & facilities',
    description: 'Complete guide to admissions, academic programmes, infrastructure, hostel facilities, scholarships and all essential college information.',
    icon: '🎓',
    color: '#1a3a6b',
    href: '#',
    size: 'PDF · 6.1 MB',
    category: 'Admissions',
  },
  {
    title: 'NIRF Report',
    subtitle: '2024 · National Institutional Ranking Framework',
    description: 'Official NIRF data submission including teaching, learning, resources, research, outreach and perception metrics for GCE Keonjhar.',
    icon: '📋',
    color: '#0f5c2e',
    href: '/nirf',
    size: 'PDF · 1.8 MB',
    category: 'Reports',
  },
  {
    title: 'College Forms',
    subtitle: 'Official forms & documents — Google Drive',
    description: 'All college-related official forms including leave applications, bonafide certificates, fee receipts, NOC forms, and other administrative documents.',
    icon: '📝',
    color: '#6b3a1a',
    href: 'https://drive.google.com/drive/folders/placeholder',
    size: 'Google Drive',
    category: 'Forms',
    external: true,
  },
]

const categoryColors: Record<string, string> = {
  Placement: '#1a3a6b',
  Publication: '#b5261e',
  Admissions: '#1a3a6b',
  Reports: '#0f5c2e',
  Forms: '#6b3a1a',
}

export default function DownloadsPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → Downloads</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>Downloads &amp; Publications</h1>
      </div>

      <div style={{ padding: '36px 32px', maxWidth: '960px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '32px', maxWidth: '600px' }}>
          Official documents, reports, and forms published by Government College of Engineering, Keonjhar. All files are provided in their most recent edition.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {downloads.map((d, i) => (
            <a
              key={i}
              href={d.href}
              target={(d as any).external ? '_blank' : undefined}
              rel={(d as any).external ? 'noopener noreferrer' : undefined}
              download={!(d as any).external && d.href !== '#' ? true : undefined}
              style={{
                display: 'flex',
                alignItems: 'stretch',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                background: 'var(--white)',
                overflow: 'hidden',
              }}
              className="dl-row"
            >
              {/* Icon column */}
              <div style={{
                width: '72px',
                flexShrink: 0,
                background: d.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
              }}>
                {d.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1, padding: '18px 20px', minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Source Serif 4, serif', fontSize: '15px', fontWeight: 600, color: 'var(--text)' }}>{d.title}</span>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: d.color,
                    border: `1px solid ${d.color}`,
                    padding: '1px 7px',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    flexShrink: 0,
                  }}>{d.category}</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '6px' }}>{d.subtitle}</div>
                <div style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.6, opacity: 0.75 }}>{d.description}</div>
              </div>

              {/* Action column */}
              <div style={{
                width: '110px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '16px',
                borderLeft: '1px solid var(--border)',
                background: 'var(--off)',
              }}>
                <div style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.3px' }}>{d.size}</div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: d.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {(d as any).external ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Open
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                      </svg>
                      Download
                    </>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Note */}
        <div style={{ marginTop: '32px', padding: '14px 18px', background: 'var(--blue-light)', border: '1px solid var(--border)', borderLeft: '3px solid var(--blue)', fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>
          <strong style={{ color: 'var(--blue)' }}>Note:</strong> For documents hosted on Google Drive, ensure you are signed in to your Google account. If a link is not working, contact the college office at{' '}
          <a href="mailto:principal@gcekjr.ac.in" style={{ color: 'var(--blue-mid)', textDecoration: 'none', fontWeight: 500 }}>principal@gcekjr.ac.in</a>
        </div>
      </div>


      <Footer />
    </div>
  )
}
