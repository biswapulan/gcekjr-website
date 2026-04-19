import UtilBar from '@/components/UtilBar'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const parameters = [
  { name: 'Teaching, Learning & Resources', weight: '30%', desc: 'Faculty strength, qualification, student-teacher ratio, library and lab resources.' },
  { name: 'Research & Professional Practice', weight: '30%', desc: 'Publications, patents, sponsored research, consultancy, and industry collaboration.' },
  { name: 'Graduation Outcomes', weight: '20%', desc: 'PhD scholars, placement rate, median salary, higher studies, and entrepreneurship.' },
  { name: 'Outreach & Inclusivity', weight: '10%', desc: 'Diversity of students from different states, gender ratio, and economically weaker sections.' },
  { name: 'Perception', weight: '10%', desc: 'Peer perception by academics and employers through structured surveys.' },
]

export default function NIRFPage() {
  return (
    <div>
      <UtilBar />
      <Header />
      <Nav />
      <div className="page-banner">
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Home → NIRF</p>
        <h1 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '24px', fontWeight: 600, color: 'white' }}>NIRF — National Institutional Ranking Framework</h1>
      </div>

      <div style={{ padding: '36px 32px', maxWidth: '900px', margin: '0 auto' }}>

        {/* About */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>About NIRF</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '32px' }}>
          The National Institutional Ranking Framework (NIRF) was approved by the Ministry of Education, Government of India in September 2015. It outlines a methodology to rank institutions across the country. GCE Keonjhar participates annually in the NIRF ranking process and submits data transparently as mandated by AICTE and the Ministry of Education.
        </p>

        {/* Ranking Parameters */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>Ranking Parameters</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '32px' }}>
          {parameters.map((p, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '16px 20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--blue)', color: 'white', fontSize: '12px', fontWeight: 700, padding: '6px 10px', flexShrink: 0, minWidth: '48px', textAlign: 'center' }}>{p.weight}</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>{p.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* NIRF Data */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', fontWeight: 600, color: 'white', background: 'var(--blue)', padding: '8px 16px', whiteSpace: 'nowrap' }}>NIRF Data Submissions</h2>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)', alignSelf: 'flex-end' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '32px' }}>
          {[
            ['NIRF 2024', 'Engineering', 'Submitted', '#'],
            ['NIRF 2023', 'Engineering', 'Submitted', '#'],
            ['NIRF 2022', 'Engineering', 'Submitted', '#'],
          ].map(([year, cat, status, href]) => (
            <div key={year} style={{ background: 'var(--white)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', flex: 1 }}>{year}</span>
              <span style={{ fontSize: '11px', background: 'var(--blue-light)', color: 'var(--blue)', padding: '3px 10px', border: '1px solid var(--border)', fontWeight: 600 }}>{cat}</span>
              <span style={{ fontSize: '11px', color: '#2d7a2d', fontWeight: 600 }}>✓ {status}</span>
              <a href={href} style={{ fontSize: '12px', color: 'var(--blue-mid)', fontWeight: 600 }}>View Data →</a>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--blue-light)', border: '1px solid var(--border)', borderLeft: '4px solid var(--blue)', padding: '16px 20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8 }}>
          For official NIRF rankings and detailed data, visit the <a href="https://nirfindia.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-mid)', fontWeight: 600 }}>NIRF Official Website →</a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
